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
  render() {
    return (
      <Container>
        <LeftColumn>
          <Nav to="/main">Diary Hub</Nav>
        </LeftColumn>
        <RightColumn>
          <List>
            <Button><Linker to="/addfood">Add Food</Linker></Button>
            <Button><Linker to="/">Workouts</Linker></Button>
            <Button><Linker to="/">Recipes</Linker></Button>
            <Button><Linker to="/">Check In</Linker></Button>
            <Button><StyledButton onClick={this.logOut}>Logout</StyledButton></Button>
          </List>
        </RightColumn>
      </Container>
    )
  }
}

export default withRouter(NavBar)