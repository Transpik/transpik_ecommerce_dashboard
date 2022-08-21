import React from "react";
import { NavLink } from "react-router-dom";


class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.activeStyle = {
      "backgroundColor": "#F3F3F3",
      "color": "#FE793D",
      "padding": "8px 16px",
      "borderRadius": "8px",
      "fontWeight": "500"
    }
    this.navLinks = this.props.navs.map(link => <NavLink className="ml-16" to={`/${link.url}`} style={({isActive}) => isActive ? this.activeStyle : undefined } key={link.url}>{link.nav}</NavLink>)
  }

  render() {
    return (
      <div className="flex justify-between items-center w-full text-secondary-white font-roboto">
        <div className="flex items-end">
          <h1 className="text-secondary-white text-3xl font-medium">{this.props.logoText || "Logo Text"}</h1>
          <h2 className="text-secondary-white text-base ml-4">{this.props.companyName || "Unnamed Profile"}</h2>
        </div>
        <div className="flex">
          <ul className="mr-40">
            {this.navLinks}
          </ul>
          <div className="underline">Logout</div>
        </div>
      </div>
    );
  }
}

export default MainNav;