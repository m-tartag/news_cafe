import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <Navbar style={{ color: 'white' }} className="Nav" sticky="top" dark expand="md">
          <NavbarBrand style={{ color: 'white' }} className="Brand" href="/">
            News Cafe
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse style={{ color: 'white' }} isOpen={this.state.isOpen} navbar>
            <Nav style={{ color: 'white' }} className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ color: 'white' }} tag={Link} to="#">
                  Events
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: 'white' }} tag={Link} to="#">
                  Booking
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    );
  }
}
