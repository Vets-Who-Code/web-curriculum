#Adding in the Router to React and Exploring es6

### Face to Face

## Set-up another create-react-app

## .map()

Show how .map works by adding using the cars.json file and linking the data up to state then displaying the data in the render function uisng .map. Make this seperate component so that when using react router it will be a smooth transition.

```class App extends Component {
  state = {
    cars: cars
  };

  render() {
    const renderCars = this.state.cars.map(car => (
      <>
        <h2>{car.id}</h2>
        <h2>{car.name}</h2>
        <h2>{car.company}</h2>
      </>
    ));
    return <>{renderCars}</>;
  }
}

```

## React Router

Install npm i react-router-dom and show how to use as a wrapper of components in App.js...

```
import React, { Component } from 'react';
import Cars from './Cars';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/cars" component={Cars} />
        </div>
      </Router>
    );
  }
}

export default App;



```

## Cars component

```
import React, { Component } from 'react';
import cars from './cars.json';
import { Link } from 'react-router-dom';

class Cars extends Component {
  state = {
    cars: cars
  };

  render() {
    const renderCars = this.state.cars.map(car => (
      <>
        <h2>{car.id}</h2>
        <h2>{car.name}</h2>
        <h2>{car.company}</h2>
      </>
    ));
    return (
      <>
        {renderCars}
        <Link to="/">Home</Link>
      </>
    );
  }
}

export default Cars;



```
