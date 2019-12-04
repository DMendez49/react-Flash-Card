import React from "react";
import Company from "./Company"
import { Table, } from "semantic-ui-react";

const Manufacturer = ({manufacturer, removeCompany, })=>(
//render data here..
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name of Manufacturer</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
  </Table.Header>
    
    <Table.Body>
    {
      manufacturer.map(company =>(
       <Company key={company.id} {...company} remove={removeCompany}/>
     
       ))
    }
      </Table.Body>
    </Table> 
);

export default Manufacturer;



