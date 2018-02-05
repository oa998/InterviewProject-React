import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

let headerHeight = 140;

const Div = styled.div`
  width: 100%;
  height: ${headerHeight}px;
  background: blue;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Img = styled.img`
  height: 100px;
  width: auto;
  margin-left: 20px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const Text = styled.div`
  font-size: 40px;
  color: white;
  height: 100%;
  display: inline-block;
  line-height: ${headerHeight}px;
  margin-left: 20px;
`;

class Header extends Component {
  render() {
    return (
      <Div>
        <Img src={logo} className="App-logo" alt="logo" />
        <Text>Staff Review</Text>
      </Div>
    );
  }
}

export default Header;
