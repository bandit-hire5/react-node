import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem  from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import { connect } from 'react-redux';
import { isUserSignedIn } from '../../redux/models/user';

const propTypes = {
    userSignedIn: PropTypes.bool.isRequired,
};

class AppNavbar extends Component {
    render() {
        return (
            <Nav navbar>
                {this.props.userSignedIn && (
                    <LinkContainer to='/time'>
                        <NavItem>
                            Время
                        </NavItem>
                    </LinkContainer>
                )}
                <LinkContainer to='/counters'>
                    <NavItem>
                        Счетчики
                    </NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

AppNavbar.propTypes = propTypes;

function mapStateToProps(state) {
    return {
        userSignedIn: isUserSignedIn(state),
    };
}

export default connect(mapStateToProps)(AppNavbar);