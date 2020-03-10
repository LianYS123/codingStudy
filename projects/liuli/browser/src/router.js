import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './App';
export default function(){
    return (
        <Switch>
            <Route path='/' component={App}></Route>
        </Switch>
    )
}