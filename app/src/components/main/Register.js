import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import styled from 'styled-components'

const Background = styled.div`
  background: #02AAB0;
  background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);
  background: linear-gradient(to right, #00CDAC, #02AAB0);
  position: fixed;
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  padding: 50px;
  background-color: white;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 2px 2px 2px grey;
  width: 35%;
  min-width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

const Style = {
  marginBottom: '5px'
}

class Register extends Component {

  handleSubmit = e => {
    e.preventDefault()
    console.log('signup')
  }

  render() {
    return (
      <Background>
      <Container>
        <Title>Create Account</Title>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label style={Style}><h3>E-mail</h3></label>
            <input style={Style} placeholder='E-mail'/>
          </Form.Field>
          <Form.Field>
            <label style={Style}><h3>First Name</h3></label>
            <input style={Style} placeholder='First Name'/>
          </Form.Field>
          <Form.Field>
            <label style={Style}><h3>Last Name</h3></label>
            <input style={Style} placeholder='Last Name'/>
          </Form.Field>
          <Form.Field>
            <label style={Style}><h3>Password</h3></label>
            <input style={Style} type='password' placeholder='Password'/>
          </Form.Field>
          <Button type='submit' color='black' size='big'>Sign Up</Button>
        </Form>
      </Container>
      </Background>
    )
  }
}

export default Register