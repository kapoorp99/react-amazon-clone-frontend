import React, {useEffect} from "react";
import './App.css';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe("pk_test_51ICjFIGOe2LN572AHsAlsokTCgdfIFbhPwuiN1uq0FZdUd9zBtLXWqq3E4zyEnzc0XK4xLFrMm7QD0HoWbS9WlZm00Ju9e0nrZ");

function App() {
  const [ {}, dispatch] = useStateValue();
  useEffect(()=>{
    //this will only run once whenthe app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log("The user is " ,authUser);
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/checkout">
            <Checkout />
        </Route>
        <Route path="/payment">
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
            <Home />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
