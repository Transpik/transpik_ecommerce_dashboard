import React from "react";
import SecondaryNav from "../components/SecondaryNav/SecondaryNav";
import { Outlet } from "react-router-dom";
import Location from "../components/Location/Location";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.isRidirect = false;
  }

  render() {
    return (
    <div>
        <SecondaryNav 
          navs={[{nav: "Profile", url: "profile"}, {nav: "API", url: "api"}, {nav: "Billing", url: "billing"}, {nav: "Marketplace", url:"marketplace"}]}
          parent={"account"}
        />
        <Location />
        <Outlet />
        
    </div>);
  }
}

export default Account;