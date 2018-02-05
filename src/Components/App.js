import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import CheckboxField from './CheckboxField';
import SubmitButton from './SubmitButton';
import ResultBox from './ResultBox';

const Form = styled.div`
  margin: 20px;
  border: solid gray 1px;
  font-family: arial;
`;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { staff : [] };
    // This binding is necessary to make `this` work in the callback
    this.getStaff = this.getStaff.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  componentWillMount = () => {
    //text is the displayed characters next to the Checkboxes
    //key is the value found in the objects returned from microservice
    //selected should represent the current state of the Checkboxes
    //This should probably be part of the page's state, but this works
    this.columns = [
      {text: 'First Name', key: 'firstName', selected: false},
      {text: 'Last Name', key:  'lastName', selected: false},
      {text: 'Gender', key:  'gender', selected: false},
      {text: 'Department', key:  'department', selected: false},
      {text: 'Job Title', key:  'jobTitle', selected: false},
      {text: 'Hire Date', key:  'hireDate', selected: false},
      {text: 'Salary', key:  'salary', selected: false}
    ];
  }

  //Retrieve the staff. At the end of this method's execution, we should
  //  have the final list of staff requested by the user
  getStaff(){
    const picked = this.columns.filter(c=>c.selected);

    let response = [{"id":1,"firstName":"Ford","lastName":"Falconbridge","gender":"Male","department":"Support","jobTitle":"Senior Financial Analyst","hireDate":937944053,"salary":339500}];

    this.setState({
      staff : response
    });
  }

  toggleCheckbox(ev){
    const index = ev.target.value;
    this.columns[index].selected = !this.columns[index].selected;
  }

  render() {

    const Checkboxes = this.columns.map((column, i)=><CheckboxField label={column.text} funct={this.toggleCheckbox} val={i} key={column.key}/>)

    return (
      <Form>
        <Header/>
        {Checkboxes}
        <SubmitButton text="Show Selected" clickFunct={this.getStaff} />
        <ResultBox lastPickedChecks={this.columns} arrayOfStaff={this.state.staff}/>
      </Form>
    );
  }

}

export default App;
