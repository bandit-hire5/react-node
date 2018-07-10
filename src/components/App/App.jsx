import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid  from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import { Link, Route } from 'react-router-dom';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import CounterPage from '../CounterPage';
import HelloWorldPage from '../HelloWorldPage';
import TimePage from '../TimePage';
import './bootstrap.css';

const propTypes = {
    children: PropTypes.node,
};

class App extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Hello World</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav navbar>
                            <LinkContainer to='/time'>
                                <NavItem>
                                    Время
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to='/counter'>
                                <NavItem>
                                    Счетчики
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    <Route path="/" exact component={HelloWorldPage} />
                    <Route path="/time" component={TimePage} />
                    <Route path="/counter" component={CounterPage} />
                </Grid>
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;