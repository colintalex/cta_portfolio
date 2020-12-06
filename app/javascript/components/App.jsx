import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AboutPage from './About/About';
import Homepage from './Homepage/Homepage'

const App = () => {
    return (
        <div>
            <div>
                NAV
            </div>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/about" component={AboutPage}/>
            </Switch>
        </div>
    )
};

export default App;