import React from "react";
import SecondaryNav from "../components/SecondaryNav/SecondaryNav";
import { Outlet } from "react-router-dom";
import Location from "../components/Location/Location";


class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
        <SecondaryNav 
          navs={[{nav: "Ongoing", url: "ongoing"}, {nav: "Completed", url: "completed"}]}
          parent={"orders"}
        />
        <Location />
        <Outlet />
    </div>);
  }
}

export default Orders;