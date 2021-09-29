import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted>
        <Menu.Item
          name="Store"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="About"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Shows"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Contact"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
