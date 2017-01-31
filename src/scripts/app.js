import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router';

import Main from "./components/Main";
import About from "./components/About";
import Error404 from "./components/Error404";

const appMount = document.getElementById("app");

const routes = <Router history = { browserHistory }>
                <Route path="/" component={Main}/>
                <Route path="about" component={About}/>
                <Route path="*" component={Error404}/>
             </Router>

ReactDOM.render(routes, appMount);
