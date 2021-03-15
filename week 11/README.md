# Week 11

## React nulla

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

- [Reactjs Wikipedia](https://en.wikipedia.org/wiki/React_(JavaScript_library)#:~:text=React%20was%20created%20by%20Jordan,JSConf%20US%20in%20May%202013.)
- [Library vs. Framework](https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/#:~:text=The%20technical%20difference%20between%20a,in%20charge%20of%20the%20flow.)
- [Todo MVC](https://todomvc.com/)
- [caniuse](https://caniuse.com/clipboard)
- [React](https://reactjs.org/)
- [Framework wars](https://www.reddit.com/r/javascript/comments/97hpck/im_looking_for_veterans_of_the_js_framework_war/)


## React I

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


## React II

Do the [Reactjs tic tac toe tutorial](https://reactjs.org/tutorial/tutorial.html). This activity will teach you a few key concepts that will get you pretty far building React apps.

### Main concepts
- Event listeners
- Hooks
- useState
- Lifting state

### Event listeners

I think the [Reactjs org docs](https://reactjs.org/docs/handling-events.html) do a pretty good job of introducing event listeners.

```javascript
function () { 
  const activateLasers = () => console.log('pew pew');

  return (
    <button onClick={activateLasers}>
      Activate Lasers
    </button>
  );
 }
```

### Hooks
> Hooks are functions that let developers "hook into" React state and lifecycle features from function components.
~ [Wikipedia React](https://en.wikipedia.org/wiki/React_(JavaScript_library)#React_hooks)

Hooks are a collection of methods attached to the `React` object. The important lesson here is that "hooks" allow us to use "State" in **function** components as opposed to class components. We will get to lifecycle and what it means to connect to it.

**Rules of Hooks**
You can only call them at the top level of a function. You can not call a hook from inside a loop or from inside another hook.

```javascript
import React from 'react';

// Nope
function () {
  for(let i = 0; i < 3; i++) {
    const state = React.useState(0);
  }
}

// Nope
function () {
  if(1 === 1) {
    const state = React.useState(0);
  }
}

// Nope
function () {
    const state = React.useState(() => {
      React.useState();
    });
}

// Yup
function () {
  const state = React.useState(0);
  return;
}
```

### State

Think of state as a way to save data in React (pretty much like a variable). The most basic way to save and update state in React is the `useState` hook.

Here is an example using state.  

```javascript
import React from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
Let's break down what's happening here:
`const [count, setCount] = React.useState(0);`
1. We call `React`'s `useState` method with 1 argument `0`. 
1. The return value from that function is an array.
1. Destructure the array and assign the first value as `count` and the second as `setCount`

Here's the example without destructuring.

```javascript
const state = React.useState(0);
const count = state[0];
const setCount = state[1];
```

The argument that `useState` takes, which is 0 in this case, is the **initial value**. The value at position 0 of that array (`count`) will initially equal 0. The second position `state[1]` equals a function. That function sets the value of `state[0]`.

### Lifting state

Eventually you'll run into a challenge where all of your components have local state, but you want the parent to know about the child's state. Lifting state will help you get there. To do this we can pass state as props from parent to children and because it is actually the parent's state that the child is calling, the parent will know about the changes.

```javascript
function CounterButton ({count, setCount}) {
  return (
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  );
}

function Counters() {
  // Declare a new state variable, which we'll call "count"
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  return (
    <div>
      <p>You clicked Count 1: {count1} times</p>
      <p>You clicked Count 2: {count2} times</p>
      <CounterButton count={count1} setCount={setCount1} />
      <CounterButton count={count2} setCount={setCount2} />
    </div>
  );
}
```

### Resources
- [Reactjs tic tac toe tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Event handling](https://reactjs.org/docs/handling-events.html)
- [State Hook](https://reactjs.org/docs/hooks-state.html)
- [Lifting state](https://reactjs.org/docs/lifting-state-up.html)

## React III

### Main concepts
- Virtual DOM
- React Lifecycle
- useEffect
- useContext

### Virtual DOM
React has created this construct called the *virtual DOM*. The library caches the entire application in memory. It updates only pieces of the DOM that need updating. So say the text of a button changes. React will rerender.

### React Lifecycle
React listens for every data change across the entire app and rerenders for every single change. For this reason there are several points at which you can hook into the each component's lifecycle. Luckily with Hooks you don't have to think about the React lifecycle as in depth.

![React Lifecycle chart](https://miro.medium.com/max/700/1*u8hTumGAPQMYZIvfgQMfPA.jpeg)


### useEffect
React data updates can happen a lot and when that happens the app rerenders. When the app rerenders components will unmount and mount again. This ends up wiping all variables you had. The only data that stays between renders is what is stored in React hooks like `useState`.

`useEffect` lets you hook into React's lifecycle.

`useEffect` takes 2 arguments.
1. A callback function (this is what gets run when the effect is called).
  - You can return a function from this callback that will run on component unmount for cleanup.
1. An array of dependencies
  - Any data your effect needs to know about needs to be put in this array.
  - No dependencies will run the effect once, only on component mount.
  - Note: it is really easy to make infinitely updating components. (A piece of state is a dependency and you update the state in the effect.) You will get used to this, don't be afraid.

This is helpful for example, when you first load a page you want to show a spinner and fetch some data. 

```javascript
function () {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // This runs when the component first mounts (page load)
  }, [])

  React.useEffect(() => {
    // Runs every time `count` updates
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### useContext
So far all state has been local to a component, or passed from parent to child. What if a component needs to pass data to a great grandchild? If you just pass through props this is called prop drilling and is bad. Prop drilling is when you pass props through components that don't actually care about props and are just passing the arguments. `useContext` can be your answer. 

There are 2 central concepts with context: Consumer, Provider. You create a Provider and attach it to a component and all nested components will be able to read and update the Provider.

```javascript
const SomeContext = React.createContext();

function App() {
  return (
    <SomeContext.Provider value="Data">
      { /* Your whole app  */}
    </SomeContext.Provider>
  );
}

function SomeNestedComponent () {
  const someData = React.useContext(SomeContext)
  console.log(someData); => "Data"
}
```

### Resources
- [useEffect](https://reactjs.org/docs/hooks-effect.html)
- [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)


## React IV

You can create any React application you want with the previous React topics. These topics focus on solving challenges for React when building applications at scale.  

### Main concepts
- portals
- PropTypes
- useReducer
- ref