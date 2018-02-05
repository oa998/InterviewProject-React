import React from 'react';
import styled from 'styled-components';

/**
   Quick and dirty table for showing the staff sent to it.
**/

const Table = styled.table`

  border: solid blue 2px;
  border-collapse: collapse;
  margin: 15px;

  tr * {
    border: solid black 1px;
  }

  * {
    padding: 0 10px;
  }
`;


const ResultBox = ({lastPickedChecks, arrayOfStaff}) => {

  //return nothing if the array is not pulled
  if(arrayOfStaff && arrayOfStaff.length === 0) return <div/>;

  const columnText = lastPickedChecks.map(col=> col.text)

  const tableHead = (<tr>{columnText.map(text=> <th key={text}>{text}</th>)}</tr>);

  const tableDatas = [];

  arrayOfStaff.forEach(staff=>{
    let tds = lastPickedChecks.map(col=> (<td key={staff[col.key]}>{ staff[col.key] }</td>))   
    tableDatas.push(tds);
  })

  const tableRows = arrayOfStaff.map((staff,i)=> <tr key={Math.random()}>{tableDatas[i]}</tr>);

  return (
            <Table>
              <thead>
                {tableHead}
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </Table>
          );
};

export default ResultBox;
