import React from "react";
import { Menu, } from "semantic-ui-react";
import { Link } from "react-router-dom"; 

const Navbar = () => (

  <Menu style={border}>
  <Link to="/">
    <Menu.Item>
      Home
    </Menu.Item>
  </Link>
  <Link to="/about">
    <Menu.Item>
      About
    </Menu.Item>
  </Link>
  <Link to="/establishment">
    <Menu.Item>
      Establishment
    </Menu.Item>
  </Link>
</Menu>
);

const border = {
  borderStyle: 'solid',
  borderWidth: '1px',
}

export default Navbar;