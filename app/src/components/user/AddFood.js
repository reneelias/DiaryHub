import React, { Component } from 'react'
import NavBar from '../main/NavBar'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  width: 630px;
  margin: 0 auto;
  margin-top: 30px;
`

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`

class AddFood extends Component {

  state ={
    user_id: localStorage.getItem('user_id'),
    isAuth: localStorage.getItem('isAuth'),
    calories: '',
    carbs: '',
    proteins: '',
    fats: '',
  }

  addFood = e => {
    e.preventDefault()
    axios.post('/food/add', {
      user_id: this.state.user_id,
      calories: this.state.calories,
      proteins: this.state.proteins,
      fats: this.state.fats,
    })
      .then(() => {

      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  changeCalories = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      this.setState({calories: e.target.value})
    }
  }

  changeCarbs = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      this.setState({carbs: e.target.value})
    }
  } 

  changeProteins = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      this.setState({proteins: e.target.value})
    }
  }

  changeFats = e => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === '' || regex.test(e.target.value)) {
      this.setState({fats: e.target.value})
    }
  }

  render() {
    return (
      <>
      <NavBar />
      <Container>
      <Grid>
        <Grid.Column style={{ width: '630px' }}>
        <Header as='h2' color='black' textAlign='center'>Add Food</Header>
        <Form size='large' onSubmit={this.addFood}>
          <Segment stacked>
          <StyledLabel>Calories</StyledLabel>
          <Form.Input 
            fluid icon='hotjar' 
            iconPosition='left' 
            placeholder='calories'
            maxLength="5" 
            value={this.state.calories}
            onChange={(e) => {this.changeCalories(e)}}
          />
          <StyledLabel>Carbs</StyledLabel>
          <Form.Input 
            fluid icon='food' 
            iconPosition='left' 
            placeholder='grams'
            maxLength="3" 
            value={this.state.carbs}
            onChange={(e) => {this.changeCarbs(e)}}
          />
          <StyledLabel>Proteins</StyledLabel>
          <Form.Input 
            fluid icon='food' 
            iconPosition='left' 
            placeholder='grams'
            maxLength="3" 
            value={this.state.proteins}
            onChange={(e) => {this.changeProteins(e)}}
          />
          <StyledLabel>Fats</StyledLabel>
          <Form.Input 
            fluid icon='food' 
            iconPosition='left' 
            placeholder='grams'
            maxLength="3" 
            value={this.state.fats}
            onChange={(e) => {this.changeFats(e)}}
          />
          <Button color='black' fluid size='large'>Submit</Button>
          </Segment>
        </Form>
        </Grid.Column>
      </Grid>
      </Container>
      </>
    )
  }
}

export default AddFood