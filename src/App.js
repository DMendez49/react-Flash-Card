import React, {Component} from 'react';
import { Container, Header, Button, Icon, Segment,} from "semantic-ui-react"; 
import Manufacturer from "./Manufacturer";
import CompanyForm from "./CompanyForm.js";

class App extends React.Component{
  state = {manufacturer: [
        {id :1, compName:"Ford", phone:"801-121-5656",},
        {id :2, compName:"Tesla", phone:"801-299-5356",},
        {id :3, compName:"Audi", phone:"801-326-5675",},
        {id :4, compName:"Toyota", phone:"801-895-3261",},
        {id :5, compName:"BMW", phone:"801-696-5000",},
    ], showForm: true,
  };

  getId = () => {
      // NOTE We are just using this as a helper function for id's since we aren't using a db yet
      return Math.floor((1 + Math.random()) * 10000);
  };

  addCompany = ({compName, phone,}) => {
    let company = {id: this.getId(), compName, phone, };
    this.setState({ manufacturer: [...this.state.manufacturer, company], });
  };

  removeCompany = (id) => {
    const manufacturer = this.state.manufacturer.filter(company => {
      if (company.id !== id)
      return company;
    });
    this.setState({ manufacturer, });
  };

  toggleForm = () => ({showForm: !this.state.showForm, });

  render(){
    return(
      <Container style={{ paddingTop: "25px"}}>
        <Header as="h1">React Flash-Card</Header>
        <br/>
        <Button icon color="blue" onClick={this.toggleForm}>
        <Icon name={this.state.showForm? 'angle double up' :'angle double down'} />
        </Button>
        <CompanyForm add={ this.addCompany}/>
        <Manufacturer manufacturer={this.state.manufacturer} removeCompany={this.removeCompany}/>
        <br/>
      </Container>
    );
  };
};

export default App;
//Contacts = Manufacturer
//contacts = manufacturer
//contact = company