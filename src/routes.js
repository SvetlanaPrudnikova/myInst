import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import Container from './components/Container'
import LoginForm from './components/LoginForm'
import PhotosList from './components/PhotosList'


export default <Router history = {browserHistory}>
    <Route path = "/" component = {Container} >
        <Route path = "/loginForm" component = {LoginForm} > <LoginForm /> </Route>
        <IndexRedirect to = "/loginForm" />
        <Route path = "/loginForm/photosList" component = {PhotosList} ><PhotosList /></Route>
    </Route>
</Router>