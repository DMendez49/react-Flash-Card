import React from "react";
import { Form, } from "semantic-ui-react";

class CompanyForm extends React.Component{
  state = {compName:"", phone: "", };

  componentDidMount(){
    if (this.props.id)
    this.setState({ compName: this.props.compName, phone: this.props.phone, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id)
      this.props.edit({ id: this.props.id, compName: this.state.compName, phone: this.state.phone, });
    else
      this.props.addCompany( this.state );
      this.setState({compName: "", phone:"", });
    // this.props.addCompany(this.state);
    // this.setState({ compName:"", phone:"", });
  };

  handleChange = (e) => {
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
        <Form.Button color = "blue inverted" >Submit</Form.Button>
        <br />
      </Form>
    );
  };
};

export default CompanyForm;