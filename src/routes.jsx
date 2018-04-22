import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom'
import Lists from './Template/Dashboard/Lists'
import Create from './Template/Dashboard/Create'
import Edit from './Template/Dashboard/Edit'

export default props => (
    <Switch>
        <Route exact path='/' component={Lists}></Route>
        <Route path='/cadastro' component={Create}></Route>
        <Route path='/edit/:id?' component={Edit}></Route>
        <Route path='*' component={Lists}></Route>
    </Switch>
)