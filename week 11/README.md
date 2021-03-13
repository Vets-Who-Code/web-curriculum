# Week 11

## Intro to React

### Overview

React is a Javascript library that makes it easier to build scaleable UIs for the browser.

### Main concepts

- Library vs Framework
- DOM manipulation
- Scaling challenges
- History (The "framework wars")
- Why we chose React

#### Library vs. framework

A framework is a whole bunch of code that dictates how you write an app. On the other hand a library is like a bag from which you can grab helpers. There's usually some tension in conversations between whether React is a library vs framework. The important thing here is that React itself is an extremely light (in terms of bytes) library. However, when you work with it you'll use a lot of other libraries together, which ends up turning it into a framework.

The [simplest React app](./simplest-react-component.html) I could think of.

#### DOM manipulation

There are a large number of DOM manipulation libraries out there. It's pretty crazy how long the list is. Check out the growing list: [Todo MVC](https://todomvc.com/). The DOM is a pretty painful API to work with, so folks come up with a bunch of different solutions.

JQuery is a great example of a library that's job is to manipulate DOM elements on a page. It does this job extremely well and that's why it's one of the longest living DOM libraries out there.

```javascript
// Javascript
document.querySelector('button').addEventListener('click' () => {});

// JQuery
$('button').click(() => {});
```

#### Scaling issues

Some challenges that pop up when working directly with the DOM:

- Code organization
  - Where do you put your event listeners so you can find them later?
  - Where do you put "state variables"?
  - There aren't really any solid pattern that makes sense across teams and organizations. Each company will have their own flavor of spaghetti.
- Templates
  - How to include html in other parts of your app?
  - There are tons of templating languages out there to do this. (Pug, EJS, Handlebars)
- State
  - Think of state as variables that are just kinda there and sometimes an event happens (like a click) and the variable changes, when it changes something happens. But multiple things need to know about state. Check out some state examples at [reactjs.org](https://reactjs.org).

React solves these problems by using a JavaScript component based architecture to handle state and you can template all your HTML using JSX.

#### The Framework wars

Back in 2017 the framework wars meant choosing between Angular vs React vs Vue for a JS framework. However, the discussion as to how best to write frontend browser code has been going on long before and as of writing this in 2021 we have tons of new frameworks. It's of this author's opinion that new devs choose a framework/library and stick with it instead of dabbling in a bunch of different ones. Mastering one way of doing things will help you internalize the reason the tech was built in the first place. Then you'll be able to move between frameworks much more easily.

#### Why we chose React

Our focus is to get vets hired as developers. To that end the job market is strong for React. The framework is used by startups and FAANGM companies. It has the largest job market for developers. Folks can challenge React's solutions and say that maybe Vue is a cleaner solution. You could also say that Angular's batteries included solution is the better way to go. We are focused on building careers and lives here.

#### Resources

- [Library vs. Framework](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/#:~:text=The%20technical%20difference%20between%20a,in%20charge%20of%20the%20flow.)
- [Todo MVC](https://todomvc.com/)
- [caniuse](https://caniuse.com/clipboard)
- [React](https://reactjs.org/)
- [Framework wars](https://www.reddit.com/r/javascript/comments/97hpck/im_looking_for_veterans_of_the_js_framework_war/)
