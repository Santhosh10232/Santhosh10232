import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './signin';
import Signup from '../App';

const Demo =()=>{
    return(
        <div>
            <Router>
                <div className="route">
                    <ul className ="router-header">
                        <li>
                            <Link to = "/Login">Login</Link>
                        </li>
                        <li>
                            <Link to = "/Signup">Signup</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/Login" component ={Login}></Route>
                        <Route exact path ="/Signup" component ={Signup}></Route>
                    </Switch>
                </div>
            </Router>

        </div>
    )
}

export default Demo;