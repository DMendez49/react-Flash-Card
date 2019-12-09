import React from "react";
import CompanyForm from "./components/CompanyForm";
import { Button, Card, Icon } from "semantic-ui-react";

class Company extends React.Component {
  state = {editing: false, };

  toggler = () => this.setState({ editing: !this.state.editing, });

  render() {
    const {id, compName, phone, remove, edit} = this.props;
    return(
      <Card color="grey">
        {
          this.state.editing ?
          <CompanyForm id={id} compName={compName} phone={phone} remove={remove} edit={edit} toggler={this.toggler}/>
          :
          <> 
            <Card.Header color="grey">
              <h1>{compName}</h1>
              </Card.Header>
            <hr/>
              <Card.Description color="grey">{phone}</Card.Description>
          </>
        }
        <Card.Content extra color="grey">
        <Button color="red inverted" onClick={() => remove(id)}>
        
          Delete
          </Button>

          <Button color="green inverted" onClick={this.toggler}>
            Edit
          </Button>
        </Card.Content>
      </Card>
    );
  };
};

export default Company;