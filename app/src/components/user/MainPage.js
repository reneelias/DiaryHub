import React, { Component } from 'react';
import styled from 'styled-components';
// import Nav from '../../routes/NavRoutes';
import NavBar from '../main/NavBar'

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
  border-radius: 10px;
  width: 90%;
  min-width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

class MainPage extends Component {
  render() {
    return (
        <Background>
            <NavBar />
            
        <Container>
            <div class="center aligned two column stackable ui grid">
                <div class="column">
                <div class="ui segment">
                <div class="ui vertical fluid menu">
                    <div class="header item">Daily Summary</div>
                </div>
                    <p>1. Get from DB.</p>
                    <p>2.</p>
                    <p>3.</p>
                </div>
                </div>

                <div class="column">
                <div class="ui segment">
                <div class="ui vertical fluid menu">
                    <div class="header item">Workout for Today</div>
                </div>
                    <p>1. Get from DB</p>
                    <p>2.</p>
                    <p>3.</p>
                </div>
                </div>
            </div>
        </Container>
                   
        </Background>

      
    );
  }
}

export default MainPage;
