import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

const App = () => {
    return (
            <Switch>
                <Route exact={true} path="/">
                        <Home />
                </Route>
                <Route exact path="/starred">
                        <Starred />
                </Route>
                <Route exact path="/show/:id">
                        <Show />
                </Route>
                <Route>
                        Not found
                </Route>
            </Switch>
    )
}

export default App
