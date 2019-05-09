import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from '../components/main/Landing'
import Login from '../components/main/Login'
import Register from '../components/main/Register'
import Main from '../components/user/Main'

const MainRoutes = () => (
    <Router>
        <>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/main" component={Main}/>
        </>
    </Router>
)

export default MainRoutes;