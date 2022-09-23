#!/usr/bin/env node

import {
  simpleGit,
  SimpleGit,
  CleanOptions,
  SimpleGitOptions,
} from "simple-git";
import process from "node:process";
import fetch from "node-fetch";
import fs from "node:fs";
import path from "node:path";

const vwcRemote = "git@github.com:Vets-Who-Code/web-curriculum.git";
const vwcCIRemote = "https://github.com/Vets-Who-Code/web-curriculum";
type TargetType = "syllabus" | "subject" | "curriculum";
const buildUrl = (target: TargetType, fileName: string = "") => {
  const root = "http://raw.githubusercontent.com/axecopfire/graph-curric/main/";
  switch (target) {
    case "syllabus":
      return root + "public/content/Base/web-curriculum/Syllabus.md";
    case "curriculum":
      return root + "public/content/Base/web-curriculum/" + fileName + ".md";
    case "subject":
      return root + "public/content/md/" + fileName + ".md";
  }
};

const buildContentPath = (contentPath: string) =>
  path.join(process.cwd(), "md", contentPath);
const cheapMkdir = (p: string) => {
  if (!fs.existsSync(p)) {
    fs.mkdirSync(p);
  }
};

const main = async () => {
  const syllabus = await fetch(buildUrl("syllabus")).then((r) => r.text());

  console.log("Parsing the Syllabus for lesson text");
  const lessonList = syllabus
    .split("\r")
    .map((l) => l.replace("\n", ""))
    .reduce((acc: string[], line) => {
      if (!line.startsWith("- ")) return acc;
      return [...acc, line.replace("- ", "")];
    }, []);

  console.log("Getting all the lessons' text");
  const rawLessons = await Promise.all(
    lessonList.map(async (lesson) => {
      const lessonUrl = buildUrl("subject", lesson);
      const lessonText = await fetch(lessonUrl).then((r) => r.text());
      return {
        text: lessonText,
        subject: lesson,
      };
    })
  );

  console.log("Ensuring the markdown folder exists");
  const mdFolderPath = buildContentPath("");
  cheapMkdir(mdFolderPath);

  console.log("Ensuring the course folder exists");
  const courseFolderPath = buildContentPath("course");
  cheapMkdir(courseFolderPath);

  console.log("Writing all the markdown lessons");
  rawLessons.map(({ text, subject }) => {
    const [folder, file] = subject.split("/");
    const subjectFolder = buildContentPath(folder);
    const contentPath = buildContentPath(`${folder}/${file}.md`);

    cheapMkdir(subjectFolder);

    fs.writeFileSync(contentPath, text);
  });

  console.log("Writing Course Structure");
  const syncHeadings = syllabus.match(/#.*/g) ?? [];
  const headingsMap = syncHeadings?.map((h) => {
    /**
     * Deletes # headings in syllabus as well as descriptions.
     * Adds hyphen for later filename matching
     * e.g. "# Phase 1: Dev onboarding" => "Phase-1"
     */
    return {
      originalHeading: h,
      cleanedHeading:
        h.replace(/^#*\s/g, "").replace(/:.*/, "").replace(/\s/, "-") ?? "",
    };
  });
  type LocalHeadingFilesType = {
    contentPath: string;
    originalHeading: string;
    cleanedHeading: string;
    newHeading: string;
  }[];
  const localHeadingFiles: LocalHeadingFilesType = [];
  await Promise.all(
    headingsMap?.map(async (heading) => {
      const baseREADMEForHeading = buildUrl(
        "curriculum",
        heading.cleanedHeading
      );
      const rawHeadingFile = await fetch(baseREADMEForHeading);

      if (rawHeadingFile.status === 200) {
        const contentText = await rawHeadingFile.text();
        const contentPath = `md/course/${heading.cleanedHeading}.md`;

        fs.writeFileSync(contentPath, contentText);
        const leadingPounds = heading.originalHeading.match(/^#*\s/g);
        let newHeading = heading.originalHeading;
        if (leadingPounds) {
          const headingWithoutPounds = newHeading.replace(leadingPounds[0], "");
          newHeading = `${leadingPounds[0]}[${headingWithoutPounds}](${contentPath})`;
        }
        localHeadingFiles.push({ ...heading, newHeading, contentPath });
      }
    })
  );

  console.log({ localHeadingFiles });

  console.log("Adding syllabus links");
  const newSyllabusText = syllabus
    .split("\r")
    .map((l) => l.replace("\n", ""))
    .map((line) => {
      if (line.startsWith("- ")) {
        const subjectTitle = line.replace("- ", "");
        return `- [${subjectTitle}](md/${subjectTitle}.md)`;
      }
      if (line.startsWith("#")) {
        const foundTitleIndex = localHeadingFiles.findIndex(
          (t) => t.originalHeading === line
        );
        if (foundTitleIndex > -1) {
          return localHeadingFiles[foundTitleIndex].newHeading;
        }
      }
      return line;
    })
    .join("\r");

  const mkPath = (fp: string) => path.join(process.cwd(), fp);
  const syllabusPath = mkPath("README.md");
  const templatePath = mkPath("TEMPLATE.md");
  let stringToWrite = newSyllabusText;
  try {
    fs.statSync(templatePath);
    const templateStr = fs.readFileSync(templatePath).toString();
    stringToWrite = templateStr.replace("${syllabus}", newSyllabusText);
  } catch (error) {
    console.log("No template file found");
  }

  console.log("Writing Base README");
  fs.writeFileSync(syllabusPath, stringToWrite);

  const git: SimpleGit = simpleGit();
  try {
    console.log("Adding remote");
    await git.addRemote("origin", vwcRemote);
  } catch (error) {
    if (!(error instanceof Error)) {
      throw new Error(`unexpected error fetching remote origin \n${error}`);
    }
    // If local should fail since the remote is already configed
    if (!error.message.includes("remote origin already exists.")) {
      throw error;
    }
  }

  // Ensure remote origin is what we want
  const remotes = await git.getRemotes(true);
  remotes.forEach((r) => {
    if (r.name === "origin") {
      if (r.refs.fetch !== vwcRemote && r.refs.fetch !== vwcCIRemote) {
        throw new Error("VWC remote url isnt setup");
      }
    }
  });

  if (!process.env.DRY_RUN) {
    if (!process.env.GITHUB_HEAD_REF) {
      throw new Error("GITHUB_HEAD_REF is required to git push");
    }
    if (!process.env.GITHUB_ACTOR) {
      throw new Error("GITHUB_ACTOR is required to get push");
    }
    console.log("Updating Git with new generated curriculum ");
    const gitTarget = process.env.GITHUB_HEAD_REF;
    const gitActor = process.env.GITHUB_ACTOR;
    const commitMessage = "curriculum update generated by " + gitActor;
    const contentToAdd = path.join(process.cwd(), "*");

    git.addConfig("user.name", gitActor);
    git.addConfig("user.email", `${gitActor}@users.noreply.github.com`);

    console.log(
      commitMessage,
      "adding",
      contentToAdd,
      "and pushing to",
      gitTarget
    );

    await git.add(contentToAdd);
    await git.status();
    await git.commit(commitMessage);
    await git.status();
    await git.push("origin", gitTarget);
  }
};

main();
