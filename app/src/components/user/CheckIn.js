import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../../routes/NavRoutes';
import { Form, Button } from 'semantic-ui-react';

const Background = styled.div`
  background: #02AAB0;
  background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);
  background: linear-gradient(to right, #00CDAC, #02AAB0);
  position: fixed;
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  padding: 25px;
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
  margin-bottom: 35px;
`

const Style = {
  marginBottom: '10px'
}

class CheckIn extends Component {

  handleSubmit = e => {
    e.preventDefault()
    console.log('signup')
  }

  render() {
    return (
      <Background>
          <Nav/>
      <Container>
        <Title><big>Check In</big></Title>
        <Form onSubmit={this.handleSubmit}>
        
        
          <Form.Field>
            <label style={Style}><big><h2>Weight*</h2></big></label>
            <input style={Style} placeholder='Enter your weight'/>
          </Form.Field>

          <label style={Style}><h3>Width Measurement Inches</h3></label>
          
          <Form.Field>
            <label style={Style}><h4>Chest</h4></label>
            <input style={Style} placeholder='Enter your chest width'/>
          </Form.Field>
          <Form.Field>
            <label style={Style}><h4>Waist</h4></label>
            <input style={Style} placeholder='Enter your waist width'/>
          </Form.Field>
          <Form.Field>
            <label style={Style}><h4>Hip</h4></label>
            <input style={Style} placeholder='Enter your hip width'/>
          </Form.Field>
          <Form.Field>

          <label style={Style}><h3>Personal Goals (optional)</h3></label>
            <label style={Style}><h4>Mile Time</h4></label>
            <input style={Style} placeholder='Enter your mile time'/>
          </Form.Field>
         
          <Form.Field>
            <label style={Style}><h4>Bench Press Personal Record</h4></label>
            <input style={Style} placeholder='Enter maximum bench weight'/>
          </Form.Field>
          

          <Button type='submit' color='black' size='big'>Record</Button>
        </Form>
      </Container>
      </Background>
    )
  }
}

export default CheckIn;
