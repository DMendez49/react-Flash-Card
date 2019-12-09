import { Container, Header, Button, Icon, Segment,} from "semantic-ui-react"; 
// import EditCompanyForm from "./EditCompanyForm.js";
import Manufacturer from "./Manufacturer";
import CompanyForm from "./CompanyForm.js";
import React from 'react';

class App extends React.Component{
  state = {
    manufacturer: [
        {id :1, compName:"Ford", phone:"801-121-5656",},
        {id :2, compName:"Tesla", phone:"801-299-5356",},
        {id :3, compName:"Audi", phone:"801-326-5675",},
        {id :4, compName:"Toyota", phone:"801-895-3261",},
        {id :5, compName:"BMW", phone:"801-696-5000",},
    ], 
    showForm: false,
  };

  getId = () =>  Math.floor((1 + Math.random()) * 10000);

      // NOTE We are just using this as a helper function for id's since we aren't using a db yet

  addCompany = ({compName, phone,}) => {
    let company = {id: this.getId(), compName, phone, }
    this.setState({ manufacturer: [...this.state.manufacturer, company], });
  };

  removeCompany = (id) => {
    const manufacturer = this.state.manufacturer.filter(company => {
      if (company.id !== id)
      return company;
    });
    this.setState({ manufacturer, });
  };

  editCompany = (newCompany) => {
    const manufacturer = this.state.manufacturer.map( originalCompany => {
      if (originalCompany.id === newCompany.id)
        return newCompany;
        return originalCompany
    });
    this.setState({manufacturer, })
  };

  toggleForm = () => this.setState({showForm: !this.state.showForm, });

  render(){
    return(
      <Container style={{ paddingTop: "25px"}}>
        <Header as="h1">React Flash-Card</Header>
        <br/>
          <Button icon color="blue" onClick={this.toggleForm}>
            <Icon name={this.state.showForm? 'angle double up' :'angle double down'} />
          </Button>
        <br/> <br/> 
        {this.state.showForm ? <CompanyForm addCompany={this.addCompany}/>: null}
        <Manufacturer manufacturer={this.state.manufacturer} removeCompany={this.removeCompany} editCompany={this.editCompany}/>
        <br/>
      </Container>
    );
  };
};

export default App;
//Contacts = Manufacturer
//contacts = manufacturer
//contact = company