import React, { useEffect } from "react";
import "./App.css";
import Header from "./header"
import Home from "./home"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./checkout";
import Login from "./Login";
import { UseStateValue } from "./stateProvider";
import { auth } from "./firebase";

function App() {
const [{}, dispatch] = UseStateValue();

  useEffect(() => {  
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>>', authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">  
            <Header />          
            <Checkout />
          </Route> 
          <Route path="/">  
            <Header />          
            <Home />
          </Route> 
        </Switch>     
      </div>
    </Router>
  );
};

export default App;
