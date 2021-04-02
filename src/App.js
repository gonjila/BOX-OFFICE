import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Switch>
            <Route exact path="/">
                <h1>
                    here is home page
                </h1>
            </Route>
            <Route exact path="/starred">
                <h1>
                    here is page for starred movies
                </h1>
            </Route>
            <Route>
                <h1>
                    here is error:404 page
                </h1>
            </Route>
        </Switch>
    )
}

export default App
