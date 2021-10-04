import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import About from '../pages/About';
import Event from '../pages/Event';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Service from '../pages/Service';
import Navlink from './Navlink';

const Header = () => {
    return (
        <div>
            <Router>
                <Navlink />
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/service'>
                    <Service/>
                </Route>
                <Route path='/event'>
                    <Event/>
                </Route>
                {/* <Route path='/notfound'>
                    NotFound
                </Route> */}
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
            </Router>
        </div>
    );
};

export default Header;