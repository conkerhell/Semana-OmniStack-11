/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>

            <switch>

                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident}/>
            </switch>

        </BrowserRouter>

    );
}