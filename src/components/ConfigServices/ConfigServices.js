import React from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Service from "../Service/Service";

class ConfigServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = { service: null, serviceID: null };
    this.pricingList = [
      { state: "Radawana", charge: "Rs.250.00" },
      { state: "Gampaha", charge: "Rs.250.00"},
      { state: "Colombo", charge: "Free"},
      { state: "Maradana", charge: "Free"},
    ],
    this.onChange = this.onChange.bind(this);
    this.contentStyle = {
      width: "396px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      padding: "16px"
    }
  }

  onChange(event) {
    if(event.value !== "None") {
      this.setState({serviceID: event.value, service: event.target.options[event.target.options.selectedIndex].label});
      //console.log(event.target.options[event.target.options.selectedIndex].label)
    } 
  }

  render() {
    return (
      <div>
        <div className="mb-6">
          <div className="text-lg mb-4 ml-4">Assign States To Services</div>
        </div>
        <select onChange={this.onChange} className="pl-4 pr-4 pt-2 pb-2 w-56 h-12 border border-solid border-input-stroke outline-orange text-base rounded-lg">
          <option value={"None"}>None</option>  
          <option value={"antonID"}>Anton</option>
          <option value={"colzID"}>Colz API</option>
        </select>
        <Popup trigger={<button className="ml-4 pl-4 pr-4 pt-1 pb-1 text-base text-white rounded-lg bg-green h-12">Config</button>} position="right center" modal contentStyle={this.contentStyle}>
          {
            close => (
              !this.state.service ? <div>Please select a service</div> :
              <div className="w-full font-roboto text-dark-gray">
                <h2 className="text-2xl font-normal mb-6">{`Config ${this.state.service} Service`}</h2>
                <p className="text-sm text-green bg-light-green p-2 border border-solid border-green rounded-lg">
                  Follwing list show down available service locations which are currently supporting
                  by the {this.state.service}.
                </p>
                <div className="w-full mt-4">
                  <table className="table-auto w-full">
                    {this.pricingList.map(item => <tr className="h-12 hover:bg-light-orange hover:border hover:border-solid hover:border-secondary-orange cursor-pointer">
                      <td><input className="cursor-pointer" type={"checkbox"}></input></td>
                      <td>{item.state}</td>
                      <td>{item.charge}</td>
                    </tr>)}
                  </table>
                  <div className="mt-4">
                    <button className="pl-4 pr-4 pt-1 pb-1 rounded-lg border border-solid border-secondary-dark_gray text-base text-secondary-dark_gray mr-4" onClick={close}>Cancel</button>
                    <button className="pl-4 pr-4 pt-1 pb-1 text-base text-white rounded-lg bg-green" onClick={close}>Done</button>
                  </div>
                </div>
              </div>
            )
          }
        </Popup>
      </div>
    );
  }
}

export default ConfigServices;