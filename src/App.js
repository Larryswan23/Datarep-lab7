import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/footer">Footer</Nav.Link>
              <Nav.Link href="/header">Header</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/" exact><Content /></Route>
          <Route path="/header"><Header></Header></Route>
          <Route path="/footer"><Footer></Footer></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
