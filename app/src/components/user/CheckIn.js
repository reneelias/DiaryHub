import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components';
import NavBar from '../main/NavBar'
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios'

const Container = styled.div`
  max-width: 630px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 35px;
`

const Style = {
  marginBottom: '10px'
}

class CheckIn extends Component {

  state ={
    user_id: localStorage.getItem('user_id'),
    isAuth: localStorage.getItem('isAuth'),
    weight: '',
    chest_width: '',
    waist_width: '',
    hip_width: '',
    mile_time: '',
    bench_weight: '',
  }

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = () => {
    axios.get(`/checkin/${this.state.user_id}`)
    .then(res => {
      this.setState({ user_details: res.data })
    })
    .catch(() => {
      console.log('error getting user details')
    })
  }


  checkin = e => {
    e.preventDefault()
    const { user_id, weight, chest_width, waist_width, hip_width, mile_time, bench_weight } = this.state

    if (weight !== 0 && chest_width !== 0 && waist_width !== 0 & hip_width !== 0) {
      axios.post('/checkin/add', {
        user_id,
        weight,
        chest_width,
        waist_width,
        hip_width,
        mile_time, //optional
        bench_weight,
      })
        .then(() => {
          this.getUserDetails()
          this.setState({
            weight: '',
            chest_width: '',
            waist_width: '',
            hip_width: '',
            mile_time: '',
            bench_weight: '',
          })
        })
        .catch(err => {
          console.log(err.response.data)
        })
  } else {
      alert('fill out fields')
  }
}

  render() {

    if (this.state.isAuth !== 'true') {
      return <Redirect to="/" />
    }
    return (
      <>
        <NavBar/>
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
            <p align= "right"><Button type='submit' color='black' size='big'>Record</Button></p>
          </Form>
        </Container>
      </>
    )
  }
}
export default CheckIn;