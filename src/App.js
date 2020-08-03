import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CrudTable from './pages/CrudTable';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={CrudTable} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
