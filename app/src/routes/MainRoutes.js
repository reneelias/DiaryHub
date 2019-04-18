import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Landing from '../components/main/Landing'
import Login from '../components/main/Login'
import Register from '../components/main/Register'

const MainRoutes = () => (
    <Router>
        <div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
        </div>
    </Router>
)

export default MainRoutes;