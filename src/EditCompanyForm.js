import React from "react";
import { Form, } from "semantic-ui-react";

class EditCompanyForm extends React.Component{
  state = {compName:"", phone:"", };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editCompany(this.state);
    this.setState({ compName:"", phone:"", });
  }

  handleSubmit = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render(){
    return(
      <Form onSubmit = {this.handleSubmit}>
        <Form.Input
        fluid 
        label="Manufacturer"
        placeholder="Manufacturer"
        name="compName"
        value={this.state.compName}
        onChange={this.handleSubmit}
        />
         <Form.Input
        fluid
        label="phone"
        placeholder="Phone"
        name="phone"
        value={this.state.phone}
        onChange={this.handleChange}
        />
        <Form.Button color = "blue inverted">Submit</Form.Button>
        <br />
      </Form>
    );
  };
};

export default EditCompanyForm;

