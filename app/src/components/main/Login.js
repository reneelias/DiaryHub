import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import styled from 'styled-components'

const Container = styled.div`
  width: 630px;
  margin: 0 auto;
  margin-top: 100px;
`

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`

export default class Login extends Component {
  render() {
    return (
      <>
      <NavBar />
      <Container>
      <Grid>
        <Grid.Column style={{ width: '630px' }}>
          <Header as='h2' color='black' textAlign='center'>Log-in to your account</Header>
          <Form size='large'>
            <Segment stacked>
              <StyledLabel>Username</StyledLabel>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' />
              <StyledLabel>Password</StyledLabel>
              <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
              <Button color='black' fluid size='large'>Login</Button>
            </Segment>
          </Form>
          <Message style={{textAlign: 'right'}}>New to us? <Link to="/register" style={{ paddingLeft: '5px'}}>Create an account</Link></Message>
        </Grid.Column>
      </Grid>
      </Container>
      </>
    )
  }
}