import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

const App = () => {
    return (
        <div>
            <Navs />
            <Switch>
                <Route exact={true} path="/">
                    <h1>
                        <Home />
                    </h1>
                </Route>
                <Route exact path="/starred">
                    <h1>
                        <Starred />
                    </h1>
                </Route>
                <Route>
                    <div>
                        Not found
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default App
