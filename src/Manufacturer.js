import React from "react";
import Company from "./Company"
import { Table, } from "semantic-ui-react";

const Manufacturer = ({manufacturer, removeManufacturer })=>(

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
       <Company key={company.id} {...company} removeManufacturer={removeManufacturer}/>
       
       ))
    }
    </Table.Body>
  </Table> 
);

export default Manufacturer;
//Contacts = Manufacturer
//contacts = manufacturer
//contact = company