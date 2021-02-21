import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import AboutPage from './About/About';
import Homepage from './Homepage/Homepage'
import WorkPage from './WorkPage/WorkPage';
import AdminDashboard from './Admin/AdminDashboard';
import Nav from './NavBar/Nav'
import styled from 'styled-components'
import Footer from './Footer';

const StyledMain = styled.div`
    // background: #3a3a3a;
    margin: 0;
    padding: 0;
    background: url('background.jpg');
    background-size: cover;
    background-position-y: -130px;
    background-position-x: -20px;
`

const StyledMainBlurEffect = styled.div`
    backdrop-filter: invert(1) blur(4px);
    background: #00000094;
`

const App = () => {
    const token = 
        document.querySelector('[name=csrf-token]').content
    
    axios.defaults.headers.common['X-CSRF-TOKEN'] = token


    return (
        <StyledMain>
            <StyledMainBlurEffect>
                <Nav/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/work" component={WorkPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/admin" component={AdminDashboard}/>
                </Switch>
                <Footer/>
            </StyledMainBlurEffect>
        </StyledMain>
    )
};

export default App;