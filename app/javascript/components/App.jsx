import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutPage from './About/About';
import Homepage from './Homepage/Homepage'
import WorkPage from './WorkPage/WorkPage';
import AdminDashboard from './Admin/AdminDashboard';
import Nav from './Nav'

const App = () => {

    return (
        <div>
            <Nav/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/work" component={WorkPage}/>
                <Route exact path="/about" component={AboutPage}/>
                <Route exact path="/admin" component={AdminDashboard}/>
            </Switch>
        </div>
    )
};

export default App;