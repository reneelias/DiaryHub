import React, { Component } from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: #24292e;
  box-shadow: 0px 3px 5px grey;
  z-index: 1000;
  display: flex;
  flex-direction: row;
`

const LeftColumn = styled.div`
  min-width: 190px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 18px 35px 0px 35px;
`

const RightColumn = styled.div`
  width: 100%;
`

const Nav = styled(Link)`
  color: white;
  :hover {
    color: white;
  }
`

const List = styled.ul`
  float: right;
  padding-top: 18px;
  padding-right: 50px;
`

const Button = styled.li`
  display: inline;
  font-size: 16px;
  padding-left: 50px;
`

const Linker = styled(NavLink)`
  color: white;
  :hover {
    text-decoration: underline;
    color: white;
  }
`

const StyledButton = styled.button`
  border: none;
  background-color: #24292e;
  color: white;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class NavBar extends Component {

  state = {
    isAuth: localStorage.getItem('isAuth'),
  }

  logout = e => {
    e.preventDefault()
    localStorage.removeItem('user_id')
    localStorage.removeItem('isAuth')
    this.props.history.push('/')
  }

  getNav = () => {
    if (this.state.isAuth === 'true') {
      return (
        <>
          <Button><Linker to="/addfood">Add Food</Linker></Button>
          <Button><Linker to="/">Workouts</Linker></Button>
          <Button><Linker to="/">Recipes</Linker></Button>
          <Button><Linker to="/checkin">Check In</Linker></Button>
          <Button><StyledButton onClick={this.logout}>Logout</StyledButton></Button>
        </>
      )
    } else {
      return (
        <>
          <Button><Linker to="/login">Login</Linker></Button>
          <Button><Linker to="/register">Sign Up</Linker></Button>
        </>
      )
    }
  }

  render() {
    return (
      <Container>
        <LeftColumn>
          <Nav to="/home">Diary Hub</Nav>
        </LeftColumn>
        <RightColumn>
          <List>
            {this.getNav()}
          </List>
        </RightColumn>
      </Container>
    )
  }
}

export default withRouter(NavBar)