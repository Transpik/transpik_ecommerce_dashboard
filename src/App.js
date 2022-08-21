import React from "react";
import MainNav from "./components/MainNav/MainNav";
import { Outlet } from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="relative bg-[#FFFDFC]">
        <div className="bg-orange w-full h-48 absolute z-0"></div>
        <div className="absolute z-10 w-full h-screen flex flex-col items-center min-h-[696px]">
          <div className="w-[1200px] h-28 flex justify-center items-center pl-8 pr-8">
            <MainNav 
              navs={[{nav: "Orders", url: "orders"}, {nav: "Account", url: "account"}, {nav: "Config", url: "config"}]}
              logoText={"Transpik"}
            />
          </div>
          <div className="bg-white h-full w-[1200px] p-8 rounded-2xl border-solid border border-secondary-light-gray" style={{"boxShadow": "0px 10px 20px rgba(229, 229, 229, 0.3)"}}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
}


export default App;