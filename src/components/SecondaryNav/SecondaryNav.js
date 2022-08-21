import React from "react";
import { NavLink } from "react-router-dom";

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.activeStyle = {
      backgroundColor: "#FE793D",
      color: "#F3F3F3"
    }
    this.secondaryNavLinks = this.props.navs.map(link => <NavLink className="mr-4 bg-secondary-orange pl-4 pr-4 pt-1 pb-1 rounded-lg text-base text-dark-gray" to={`/${this.props.parent}/${link.url}`} style={({isActive}) => isActive ? this.activeStyle : undefined } key={link.nav}>{link.nav}</NavLink>)
  }

  render() {
    return (
      <div className="font-roboto">
        <ul className="flex">{this.secondaryNavLinks}</ul>
      </div>
    );
  }
}

export default SecondaryNav;