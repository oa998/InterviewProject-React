import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 40px;
  height: auto;
  border: solid blue 3px;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: bolder;
  color: green;
`;

const CheckboxField = ({label, funct, val}) => (
  <div>
    <Label>
      <Input type="checkbox" value={val} id={'check_'+label} onChange={funct}/>
      {label}
    </Label>
  </div>
);

export default CheckboxField;
