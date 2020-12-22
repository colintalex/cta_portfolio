import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import AboutPage from './About/About';
import Homepage from './Homepage/Homepage'
import WorkPage from './WorkPage/WorkPage';
import AdminDashboard from './Admin/AdminDashboard';
import Nav from './Nav'

const App = () => {
    const token = 
        document.querySelector('[name=csrf-token]').content
    
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token


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