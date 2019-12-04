import React from "react";
import { Form, } from "semantic-ui-react";

class CompanyForm extends React.Component{
  state = {name:"", phone: "",};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ compName:"", phone:"", });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };

  render(){
    // const {compName, phone,} = this.this
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
        fluid
        label="Manufacturer"
        placeholder="Manufacturer"
        name="compName"
        value={this.state.compName}
        onChange={this.handleChange}
        />
        <Form.Input
        fluid
        label="phone"
        placeholder="Phone"
        name="phone"
        value={this.state.phone}
        onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  };
};

export default CompanyForm;