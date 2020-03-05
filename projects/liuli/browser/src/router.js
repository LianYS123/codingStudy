import React from 'react';
import {Route,Switch} from 'react-router-dom';
import App from './App';
export default function(){
    return (
        <Switch>
            <Route path='/:cate/:page' component={App}></Route>
            <Route path='/:page' component={App}></Route>
            <Route path='/' component={App}></Route>
        </Switch>
    )
}