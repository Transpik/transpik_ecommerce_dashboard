import React from "react";
import SecondaryNav from "../components/SecondaryNav/SecondaryNav";
import { Outlet } from "react-router-dom";
import Location from "../components/Location/Location";

class Config extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <SecondaryNav 
          navs={[{nav: "Services", url: "services"}, {nav: "System", url: "system"}]}
          parent={"config"}
        />
        <Location />
        <Outlet />
    </div>);
  }
}

export default Config;