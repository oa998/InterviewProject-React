import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: lightgray;
  font-size: 20px;
  margin: 50px 15px 10px 15px;
`;


const SubmitButton = ({clickFunct, text}) => (
  <Button onClick={clickFunct}>{text}</Button>
);

export default SubmitButton;
