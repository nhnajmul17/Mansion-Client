import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import AllApartments from './Components/Pages/AllApartments/AllApartments/AllApartments';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Components/Pages/Bookings/Booking/Booking';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
