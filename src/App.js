import { Route, Switch, } from 'react-router-dom';
import { Container, } from "semantic-ui-react"; 
import React , {Fragment, NoMatch} from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/Navbar";
import establishment from "./components/establishment";


const App = () => (
  <Fragment>
    <Navbar />
      <Container>
        <Switch>
          <Route exact path= "/" component={Home}/>
          <Route exact path= "/about" component={About}/>
          <Route exact path="/establishment" component={establishment}/>
          <Route component= {NoMatch} />
        </Switch>
      </Container>
  </Fragment>
);

export default App;
