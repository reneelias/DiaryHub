import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Background = styled.div`
  background: #02AAB0;
  background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);
  background: linear-gradient(to right, #00CDAC, #02AAB0);
  position: fixed;
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  width: 446px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const Title = styled.h1`
  color: white;
  font-size: 6em;
`

const Description = styled.p`
  color: white;
  font-size: 1.5em;
  margin: 0;
`

const Links = styled.div`
  margin-top: 60px;
  border: 3px solid white;
  border-radius: 10px;
  width: 200px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: inline-block;
  :hover {
    background-color: #02AAB0;
  }
`

const StyledLink = styled(Link)`
  color: black;
  :hover {
    color:black;
    text-decoration: none;
  }
`

class Landing extends Component {
  render() {
    return (
      <Background>
        <Container>
          <Title>Fitness Hub</Title>
          <Description>Reach your fitness goals with the help of</Description>
          <Description>Fitness Hub. Manage and log your foods,</Description>
          <Description>workouts, and measurements.</Description>
          <div>
            <Links style={{marginRight: '40px'}}>
              <StyledLink to="/login"><h1 style={{color: 'white', textAlign: 'center'}}>Log In</h1></StyledLink>
            </Links>
            <Links>
              <StyledLink to="/register"><h1 style={{color: 'white', textAlign: 'center'}}>Sign Up</h1></StyledLink>
            </Links>
          </div>
        </Container>
      </Background>
    )
  }
}

export default Landing