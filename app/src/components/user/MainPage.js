import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from '../../routes/NavRoutes';

const Background = styled.div`
  background: #02AAB0;
  background: -webkit-linear-gradient(to right, #00CDAC, #02AAB0);
  background: linear-gradient(to right, #00CDAC, #02AAB0);
  position: fixed;
  width: 100%;
  height: 100vh;
`

class MainPage extends Component {
  render() {
    return (
      <Background>
          <Nav/>
            
      </Background>
    );
  }
}

export default MainPage;
