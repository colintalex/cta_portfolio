import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage}/>
        </Switch>
    )
};

export default App;