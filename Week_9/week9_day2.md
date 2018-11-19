# Intro to React JS

## Why use React?

Virtual DOM

## React => Vanilla JS

in body

```
 <div id="root">not rendered</div>
  <script src="https://unpkg.com/react@16.4.1/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.development.js"></script>
```

in script

```
const App = () => {
return React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Adopt Me!")
);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
```

## Show Props

## Show State

```
class App extends React.Component {
  state={}

  handleClick=()=> {
    // Increment the count when the button is clicked
    this.setState({
      count: this.state.count + 1
    }, function() {
      // setState is asynchronous! This function gets called
      // when it's finished.
      console.log("Job's done");
    });
  }

  render() {
    return (
      <div className="app">
        <div className="click-count">
          Button presses: {this.state.count}
        </div>
        <button onClick={this.handleClick}>
          Add One
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
```
