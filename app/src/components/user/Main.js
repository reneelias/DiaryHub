import React, { Component } from 'react'
import NavBar from '../main/NavBar'
import styled from 'styled-components'

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
`

const Daily = styled.div`
`

const Workout = styled.div`
  margin-top: 30px;
`

const Header = styled.div`
  background-color: #24292e;
  height: 40px;
  color: white;
  font-size: 20px;
  padding-top: 9px;
  padding-left: 15px;
  border-radius: 6px 6px 0px 0px;
`

const Body = styled.div`
  border: 1px solid grey;
`

const Remaining = styled.div`
  font-size: 15px;
  padding: 15px;
`

const Calories = styled.div`
  font-size: 40px;
  padding-left: 15px;
  padding-bottom: 15px;
  color: green;
`

class Main extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Daily>
            <Header>Daily Summary</Header>
            <Body>
              <Remaining>Calories Remaining</Remaining>
              <Calories>3000</Calories>
            </Body>
          </Daily>
          <Workout>
            <Header>Workout</Header>
          </Workout>
        </Container>
      </>
    )
  }
}

export default Main