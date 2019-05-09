import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import NavBar from './NavBar'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  padding-left: 10px;
  padding-right: 10px;
  margin: auto;
  margin-top: 5%;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 15px;
  text-align: center;
`

const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  padding: 15px;
  border-radius: 4px;
`

export default class Register extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <Form onSubmit={this.handleRegister}>
            <Title>Create an account</Title>
            <Wrapper>
              <Form.Field>
                <label>Username</label>
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Username' 
                  onChange={(e) => {this.setState({email: e.target.value})}}
                />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='First Name' 
                  onChange={(e) => {this.setState({firstname: e.target.value})}}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Form.Input 
                  fluid icon='user' 
                  iconPosition='left' 
                  placeholder='Last Name' 
                  onChange={(e) => {this.setState({lastname: e.target.value})}}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Form.Input 
                  fluid icon='lock' 
                  iconPosition='left' 
                  placeholder='Password' 
                  type='password' 
                  onChange={(e) => {this.setState({password: e.target.value})}}
                />
              </Form.Field>
            </Wrapper>
            <Button style={{marginTop: '10px'}}color='black' fluid size='large'>Login</Button>
          </Form>
        </Container>
      </>
    )
  }
}