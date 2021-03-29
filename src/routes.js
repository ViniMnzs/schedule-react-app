import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main'
import Edit from './pages/Edit'

function Routes() {

  return (
    <BrowserRouter>
    <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/edit/:id' component={Edit}/>
    </Switch>
</BrowserRouter>
  );
}

export default Routes;
