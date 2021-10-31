import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cars from "./cars/cars";
import Home from "./home/home";
import Manger from "./manger/manger";
import './router.css'
const RouterNav = () => {
  return (<>
    <Router>
      <div >
        <nav>
          <ul className="div-home">
            <li>
              <Link className="a" to="/home/home">Home</Link>
            </li>
            <li>
              <Link className="a"  to="/cars/cars">Cars</Link>
            </li>
            <li>
              <Link className="a"  to="/manger/manger">Manger</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/home/home">
            <Home/>
          </Route>
          <Route path="/cars/cars">
            <Cars />
          </Route>
          <Route path="/manger/manger">
            <Manger />
          </Route>
        </Switch>
      </div>
    </Router>
  </>);
};

export default RouterNav;
