import React, { Component } from 'react'
import { Button, Form, Grid, Header, Segment, Table } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import NavBar from '../main/NavBar'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  max-width: 630px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px;
`

const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
`

const Wrapper = styled.div`
  max-width: 630px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
`


class Workouts extends Component {

    state ={
        user_id: localStorage.getItem('user_id'),
        isAuth: localStorage.getItem('isAuth'),
        user_details: [],
        calories: '',
        carbs: '',
        proteins: '',
        fats: '',
        workoutName: '',
        workoutTime: '',
        caloriesBurn: '',
        fatsBurn: '',
      }

      componentDidMount() {
        this.getUserDetails()
      }
    
      getUserDetails = () => {
        axios.get(`/workout/${this.state.user_id}`)
        .then(res => {
          this.setState({ user_details: res.data })
        })
        .catch(() => {
          console.log('error getting user details')
        })
      }

      changeWorkoutName = e => {
        this.setState({workoutName: e.target.value})
      }

      changeCaloriesBurn = e => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
          this.setState({caloriesBurn: e.target.value})
        }
      }

      changeWorkoutTime = e => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
          this.setState({workoutTime: e.target.value})
        }
      }

      changeFatsBurn = e => {
        const regex = /^[0-9\b]+$/;
        if (e.target.value === '' || regex.test(e.target.value)) {
          this.setState({fatsBurn: e.target.value})
        }
      }

      workouts = e => {
        const { user_id, workoutName, workoutTime, caloriesBurn, fatsBurn } = this.state
        e.preventDefault()
    
        if (this.state.user_details.goal === 0) {
          alert('Set goal before you workout!')
          console.log('set goal before you workout')
        } else {
    
        if (workoutName.length !== 0 && workoutTime.length !== 0 & caloriesBurn.length !== 0 & fatsBurn.length !== 0) {
          axios.post('/workout/add', {
            user_id,
            workoutName,
            workoutTime,
            caloriesBurn,
            fatsBurn,
          })
            .then(() => {
              this.getUserDetails()
              this.setState({
                workoutName: '',
                workoutTime: '',
                caloriesBurn: '',
                fatsBurn: '',
              })
            })
            .catch(err => {
              console.log(err.response.data)
            })
        } else {
          console.log('no empty fields')
        }
    
        }
      }

    render() {
        const { user_details } = this.state

        if (this.state.isAuth !== 'true') {
            return <Redirect to="/" />
        }

        return(
        <>
            <NavBar />
            <Container>
                <Grid>
                    <Grid.Column style={{ width: '630px' }}>
                    <Header as='h2' color='black' textAlign='center'>Workouts</Header>
                    <Form size='large' onSubmit={this.workouts}>
                    <Segment stacked>
                    <StyledLabel>Workout Name</StyledLabel>
                    <Form.Input 
                        fluid icon='child' 
                        iconPosition='left' 
                        placeholder='name'
                        maxLength="20" 
                        value={this.state.workoutName}
                        onChange={(e) => {this.changeWorkoutName(e)}}
                    />
                    <StyledLabel>Workout Time</StyledLabel>
                    <Form.Input 
                        fluid icon='clock' 
                        iconPosition='left' 
                        placeholder='mins'
                        maxLength="5" 
                        value={this.state.workoutTime}
                        onChange={(e) => {this.changeWorkoutTime(e)}}
                    />
                    <StyledLabel>Calories Burn</StyledLabel>
                    <Form.Input 
                        fluid icon='hotjar' 
                        iconPosition='left' 
                        placeholder='kcal'
                        maxLength="5" 
                        value={this.state.caloriesBurn}
                        onChange={(e) => {this.changeCaloriesBurn(e)}}
                    />
                    <StyledLabel>Fat Burn</StyledLabel>
                    <Form.Input 
                        fluid icon='hotjar' 
                        iconPosition='left' 
                        placeholder='grams'
                        maxLength="5" 
                        value={this.state.fatsBurn}
                        onChange={(e) => {this.changeFatsBurn(e)}}
                    />
                    
                    <Button color='black' fluid size='large'>Submit</Button>
                    </Segment>
                    </Form>
                    </Grid.Column>
                </Grid>
                <Wrapper>
                    <h1 style={{textAlign: 'center'}}>Totals</h1>
                    <Table color='black'>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Calories</Table.HeaderCell>
                            <Table.HeaderCell>Carbs</Table.HeaderCell>
                            <Table.HeaderCell>Proteins</Table.HeaderCell>
                            <Table.HeaderCell>Fats</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>{user_details.calories}kcal</Table.Cell>
                            <Table.Cell>{user_details.carbs}g</Table.Cell>
                            <Table.Cell>{user_details.proteins}g</Table.Cell>
                            <Table.Cell>{user_details.fats}g</Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                    
                  <h1 style={{textAlign: 'center'}}>Workouts Record</h1>
                  <Table color='black'celled fixed>
                      <Table.Header>
                          <Table.Row>
                              <Table.HeaderCell>Workout Name</Table.HeaderCell>
                              <Table.HeaderCell>Workout Time</Table.HeaderCell>
                              <Table.HeaderCell>Calories Burn</Table.HeaderCell>
                              <Table.HeaderCell>Fat Burn</Table.HeaderCell>
                          </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        { user_details.workouts !== undefined && Object.keys(user_details.workouts.reverse()).map( (item) => 
                          <Table.Row key={item}>
                              <Table.Cell>{user_details.workouts[item].workoutName}</Table.Cell>
                              <Table.Cell>{user_details.workouts[item].workoutTime}</Table.Cell>
                              <Table.Cell>{user_details.workouts[item].caloriesBurn}</Table.Cell>
                              <Table.Cell>{user_details.workouts[item].fatsBurn}</Table.Cell>
                          </Table.Row>)
                        }
                      </Table.Body>
                  </Table>
                </Wrapper>
            </Container>
        </>
        )
    }
}

export default Workouts