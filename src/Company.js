import React from "react";
import { Button, Table, } from "semantic-ui-react";

const Company =({id, compName, phone, remove})=>(
  <Table.Row>
    <Table.Cell>{compName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color="red inverted" onClick={() => remove(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
);

export default Company;