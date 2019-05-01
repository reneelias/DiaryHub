import React from 'react'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components';

/* Navigation Sytle */
const NavBar = styled.div`
    /* fix top */
    position: fixed;
    top: 0;
    width: 100%;

    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;

    li a {
        float: left;
      }

    li a {
    display: block;
    color: white;
    text-align: center;
    padding: 10px 50px;
    text-decoration: none;
    }
    
    li a:hover {
    background-color: #111;
    }
`

const NavRoutes = () => (
    <Router>
        <Route></Route>
        <div>
            <NavBar>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Check In</Link></li>
                <li><Link to="/">Add Food</Link></li>
                <li><Link to="/">Workout</Link></li>
                <li><Link to="/">Receipt</Link></li>
            </NavBar>
        </div>
    </Router>
)

export default NavRoutes;