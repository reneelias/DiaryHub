import React, { Component } from 'react'
import NavBar from '../main/NavBar'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
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

class AddFood extends Component {
    render() {
      return (
        <>
        <NavBar />
        <Container>
        <Grid>
            <Grid.Column style={{ width: '630px' }}>
            <Header as='h2' color='black' textAlign='center'>Add Food</Header>
            <Form size='large'>
                <Segment stacked>
                <StyledLabel>Food Name</StyledLabel>
                <Form.Input fluid icon='food' iconPosition='left' placeholder='Food Name' />
                <StyledLabel>Calories</StyledLabel>
                <Form.Input fluid icon='hotjar' iconPosition='left' placeholder='Food Calories' />
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