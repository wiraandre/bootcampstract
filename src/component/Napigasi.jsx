import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

export default class Napigasi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="Napigasi" color="light" light expand="md" fixed-top>
          <a className="navbar-brand" href="#">
            <img
              src="http://i63.tinypic.com/oid9xu.png"
              width="50px"
              height="50px"
              alt=""
            />
          </a>
          <NavbarBrand href="/">Santren Koding KW</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Santren Kilat
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Kajian Koding
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  Tentang Kami
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Button outline color="info">
            Login/signup
          </Button>{' '}
        </Navbar>
      </div>
    );
  }
}
