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

  logout() {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('refreshToken');
    window.location.href = 'https://transpikland.onrender.com';
  }

  render() {
    return (
      <div className="flex justify-between items-center w-full text-secondary-white font-roboto">
        <div className="flex items-end">
          <h1 className="text-secondary-white text-3xl font-medium">{this.props.logoText || "Logo Text"}</h1>
          
        </div>
        <div className="flex">
          <ul className="mr-40">
            {this.navLinks}
          </ul>
          <div className="underline" onClick={logout}>Logout</div>
        </div>
      </div>
    );
  }
}

export default MainNav;