import React from "react";
import Company from "../Company"
import { Card, } from "semantic-ui-react";

const Manufacturer = ({manufacturer, removeCompany, editCompany }) => (
 
   <Card.Group itemsPerRow={3}> {  
      manufacturer.map(company =>(
       <Company key={company.id} {...company} remove={removeCompany} edit={editCompany}/>
       ))
    }
      </Card.Group>
);

export default Manufacturer;



