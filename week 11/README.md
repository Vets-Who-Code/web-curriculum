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


## React basics

The first thing to do is get a project up and running. Luckily Facebook has provided a great CLI tool called [Create React app](https://reactjs.org/docs/create-a-new-react-app.html) (CRA). Most React apps you see out there no matter the size usually started at one point in time as a CRA. Eventually a project will out grow CRA and you can `eject` the app and make it more configurable. For our purposes CRA is more than enough.

### Main concepts
- Function/Class Components
- Render
- JSX
- Props
- Arrays/lists
- Conditional Rendering

### Function/Class Components

You will see two ways of writing React as either [class components or function components](https://reactjs.org/docs/components-and-props.html#function-and-class-components). Class components are the "old way" of doing it. As of writing this the React team is working on updating the React docs with the new Functional way of writing components. For now however, devs need to be able to mentally jump between class/functional components. We prefer devs write function components because they are simpler than class style ones.

Both of these do the same thing.

```javascript
// Function component
function Welcome() {
  return <h1>Hello, world!</h1>;
}

// Class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, world!</h1>;
  }
}
```

### Rendering

To [render](https://en.wikipedia.org/wiki/Rendering_(computer_graphics)) DOM elements with React just return JSX from a function component. You can only return 1 JSX element no more no less.
- In the example below take note
  - When the return value of a function takes multiple lines put `()` around the value.
  - In the last example notice `<>...</>` This is a React Fragment. It does not end up rendering an element. If you need a wrapping element as a return value but don't actually need anything rendered use the React Fragment.

```javascript

// Nope
function () {
  return;
}

// Nope
function () {
  return (
    <div>div 1</div>
    <div>div 2</div>
  );
}

// Yup
function () {
  return (
    <>
      <div>div 1</div>
      <div>div 2</div>
    </>
  );
}
```

### JSX

JSX is the templating language that React uses to render html. It should look familiar like HTML you've written. There are some key differences and additions.

- Call HTML classes `className`.
```html
<!-- HTML -->
<div class="best-class">Hello there</div>
```

```javascript
// JSX
function () {
  return <div className="best-class" >Hello there</div>
}
```

- JSX can have JavaScript expressions
```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
- HTML attributes in JSX can use variables
```javascript 
const customStyle = { backgroundColor: 'green' };
const element = <p style={customStyle}>I have a green background</p>
```

### Props

In React props are the way to pass data between components. Think of props as the glue between components. All React component functions take 1 argument and that argument is generally known as props.

Check out the example below of a simple way of defining and passing props.

```javascript
function Greeting (props) {
  return <h1>Hello {props.name}</h1>;
}

function WelcomePage () {
  return (<main>
    <Greeting name='Jill' />
  </main>)
}
```

You'll see sometimes in code that props will be [destructured](https://dmitripavlutin.com/javascript-object-destructuring/).
```javascript
function Greeting ({ name }) {
  return <h1>Hello {name}</h1>;
}
```

### Arrays and Lists

JSX allows us to render JavaScript arrays. You'll need to add a unique key to each item in the array.

```javascript
function () {
  const list = [
    <li key="item-0">list item</li>,
    <li key="item-1">another item</li>,
    <li key="item-2">last item</li>,
  ]
  return <ul>{list}</ul>;
}
```

You'll usually see something more like the next example in the wild. Both examples render the exact same thing.

```javascript
function () {
  const listItems = ['list item', 'another item', 'last item' ];
  return (
    <ul>
      {listItems.map((item, i) => <li key={`item-${i}`} >{item}</li>)}
    </ul>
  )
}
```

### Conditional rendering

Conditional rendering is just if/else statements. There are a few ways to conditionally render JSX.

- Save a variable
```javascript
function () {
  const boolean = true;
  let Saying;
  if (boolean) {
    Saying = <h1>Hello, world!</h1>;
  } else {
    Saying = <h1>Goodbye, world!</h1>;
  }
  return <Saying>;
}
```

- Inline ternary operator
```javascript
function () {
  const boolean = true;
  return (<h1>{boolean ? 'Hello' : 'Goodbye' }, world!</h1>)
}
```

- Inline logical `&&`
```javascript
function () {
  const boolean = true;
  return (
    <>
      {boolean && <h1>Hello, world!</h1>}
      {!boolean && <h1>Goodbye, world!</h1>}
    </>
  )
}
```




### Resources
- [Create React app](https://reactjs.org/docs/create-a-new-react-app.html)
- [Function and class components](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [Components and Props](https://reactjs.org/docs/components-and-props.html)
- [Object destructuring](https://dmitripavlutin.com/javascript-object-destructuring/)
- [Conditional rendering](https://reactjs.org/docs/conditional-rendering.html)


## React Basics II

Do the [Reactjs tic tac toe tutorial](https://reactjs.org/tutorial/tutorial.html). This activity will teach you a few key concepts that will get you pretty far building React apps.

### Main concepts
- State
- Virtual DOM
- React Lifecycle
- Lifting state
- 

### State

Think of state as a way to save data in React (pretty much like a variable). The reason we need S


 I'm going to use a class component for this example because I think it's clearer in the beginning than how functions use state. 

```javascript
```

### Resources
- [Reactjs tic tac toe tutorial](https://reactjs.org/tutorial/tutorial.html)