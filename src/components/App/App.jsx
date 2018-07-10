import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Grid from 'react-bootstrap/lib/Grid';
import Navbar from 'react-bootstrap/lib/Navbar';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';
import './bootstrap.css';

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
                        <AppNavbar />
                    </Navbar.Collapse>
                </Navbar>
                <Grid>
                    {
                        routes.map((route, key) => {
                            return <Route key={key} path={route.path} exact={route.exact ? true : null} component={route.component} />;
                        })
                    }
                </Grid>
            </div>
        );
    }
}

export default App;