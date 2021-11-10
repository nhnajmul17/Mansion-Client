import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import AllApartments from './Components/Pages/AllApartments/AllApartments/AllApartments';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/apartments'>
            <AllApartments></AllApartments>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
