import React from "react";
import { Button, Table, removeManufacturer} from "semantic-ui-react";

const Company =({id, compName, phone, removeManufacturer})=>(
  <Table.Row>
    <Table.Cell>{compName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red inverted" onClick={() => removeManufacturer(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Company;