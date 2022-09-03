#!/usr/bin/env node

import { simpleGit, SimpleGit, CleanOptions, SimpleGitOptions } from 'simple-git';
import process from 'node:process';
import fetch from 'node-fetch';
import fs from 'node:fs';
import path from 'node:path';

const vwcRemote = 'git@github.com:Vets-Who-Code/web-curriculum.git';
const vwcCIRemote = 'https://github.com/Vets-Who-Code/web-curriculum';
type TargetType = 'syllabus' | 'subject';
const buildUrl = (target: TargetType, fileName: string = '') => {
    const root = 'http://raw.githubusercontent.com/axecopfire/graph-curric/main/';
    switch (target) {
        case 'syllabus':
            return root + 'public/content/Base/Syllabus.md';
        case 'subject':
            return root + 'public/content/md/' + fileName + '.md';
    }
}

const buildContentPath = (contentPath: string) => path.join(process.cwd(), 'md', contentPath);
const cheapMkdir = (p: string) => {
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }
}

const main = async () => {
    const syllabus = await fetch(buildUrl('syllabus')).then(r => r.text());

    console.log("Parsing the Syllabus for lesson text")
    const lessonList = syllabus.split('\r').map(l => l.replace('\n', '')).reduce((acc: string[], line) => {
        if (!line.startsWith('- ')) return acc;
        return [...acc, line.replace('- ', '')];
    }, []);

    console.log("Getting all the lessons' text");
    const rawLessons = await Promise.all(lessonList.map(async lesson => {
        const lessonUrl = buildUrl('subject', lesson)
        const lessonText = await fetch(lessonUrl).then(r => r.text());
        return {
            text: lessonText,
            subject: lesson
        }
    }))

    console.log('Ensuring the markdown folder exists');
    const mdFolderPath = buildContentPath('');
    cheapMkdir(mdFolderPath)

    console.log('Writing all the markdown lessons')
    const lessonFilePaths = rawLessons.map(({ text, subject }) => {
        const [folder, file] = subject.split('/');
        const subjectFolder = buildContentPath(folder);
        const contentPath = buildContentPath(`${folder}/${file}.md`);

        cheapMkdir(subjectFolder);

        fs.writeFileSync(contentPath, text);
    });

    console.log('Adding syllabus links');
    const newSyllabusText = syllabus.split('\r').map(l => l.replace('\n', '')).map(line => {
        if (line.startsWith('- ')) {
            const subjectTitle = line.replace('- ', '');

            return `- [${subjectTitle}](md/${subjectTitle}.md)`
        }
        return line;
    }).join('\r');

    console.log('Updating syllabus');
    const syllabusPath = path.join(process.cwd(), 'README.md');
    fs.writeFileSync(syllabusPath, newSyllabusText);

    console.log('Adding remote');
    const git: SimpleGit = simpleGit();
    try {
        await git.addRemote('origin', vwcRemote);
    } catch (error) {
        if (!(error instanceof Error)) {
            throw new Error(`unexpected error fetching remote origin \n${error}`);
        }
        // If local should fail since the remote is already configed
        if (!error.message.includes('remote origin already exists.')) {
            throw error;
        }
    }

    // Ensure remote origin is what we want 
    const remotes = await git.getRemotes(true);
    remotes.forEach(r => {
        if (r.name === 'origin') {
            if (r.refs.fetch !== vwcRemote && r.refs.fetch !== vwcCIRemote) {
                throw new Error("VWC remote url isnt setup");
            }
        }
    });

    if (!process.env.DRY_RUN) {
        console.log('Updating Git with new generated curriculum');
        git.add(process.cwd() + '*')
            .commit('Automated commit');

        console.log('============>');
        console.log('We got to figure out our branch', {
            GITHUB_REF: process.env.GITHUB_REF,
            GITHUB_HEAD_REF: process.env.GITHUB_HEAD_REF,
            GITHUB_REF_NAME: process.env.GITHUB_REF_NAME
        })
        console.log('============>');

        // .push('origin', process.env.GITHUB_REF_NAME);
    }
}

main();