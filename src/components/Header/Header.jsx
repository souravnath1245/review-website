import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import About from '../pages/About';
import Event from '../pages/Event';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Service from '../pages/Service';
import ServiceDetail from '../pages/ServiceDetail';
import Navlink from './Navlink';

const Header = () => {
    return (
        <div>
            {/* ============================BorwserRouter Start  */}
            <Router>
                <Navlink />
                {/*=============================== Switch Start  */}
            <Switch>
                {/*================================ Route Start  */}
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/serviceDetail'>
                    <ServiceDetail/>
                </Route>
                <Route path='/event'>
                    <Event/>
                </Route>
                {/* <Route path='/cart'>
                    <Ca/>
                </Route> */}
                {/* <Route path='/notfound'>
                    NotFound
                </Route> */}

                {/*============================ Notfond Components  */}
                <Route path='*'>
                    <NotFound/>
                </Route>
            </Switch>
            </Router>
            {/*======================================== Router End  */}
        </div>
    );
};

export default Header;