import React from "react";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import Service from "../Service/Service";

import axios from "axios";

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2OTcyNDYsImV4cCI6MTY2Njg3MDA0NiwiYXVkIjoiZGVsaXZlcnkiLCJpc3MiOiJodHRwczovL3RyYW5zcGlrYXBpLm9ucmVuZGVyLmNvbSIsInN1YiI6IjYzNTdjODAyZThkNzZhOWE3N2JiYmEyMCJ9.P3-RjEQG-nEF8yyy7-eoZUm0uxwylzOt1a8gdQyuNeM';

class ConfigServices extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = { service: null, serviceID: null, services:[] };
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

  async getData() {
    let rawServices;
    let response = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/users/delivery_services/verified',
      mode: 'cors',
      withCredentials: true
    });

    if(response.status == 200) {
      rawServices = response.data.data.services;
    }else {
      console.log(response.status);
    }
    let usingServices;
    let services = [];

    response = await axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/users',
      mode: 'cors',
      withCredentials: true
    });

    if(response.status == 200) {
      usingServices = response.data.data.user.using_services;
      rawServices.forEach(service => {
        if(usingServices.indexOf(service._id) < 0) {
          services.push(service)
        }
        
      })
    }
    return services;
  }

  componentDidMount() {
    this.getData().then(services => this.setState({ services: services }, () => {
      console.log(this.state.services[0].verification_data);
    }));
    console.log(this.state.services);
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
          {
            this.state.services.map(service => <option value={service.verification_data.business_name}>{service.verification_data.business_name}</option> )
          }
        </select>
        <Popup trigger={<button className="ml-4 pl-4 pr-4 pt-1 pb-1 text-base text-white rounded-lg bg-green h-12">Config</button>} position="right center" modal contentStyle={this.contentStyle}>
          {
            close => (
              !this.state.service ? <div>Please select a service</div> :
              <div className="w-full font-roboto text-dark-gray">
                <h2 className="text-2xl font-normal mb-6">{`Config ${this.state.service} Service`}</h2>
                <p className="text-sm text-green bg-light-green p-2 border border-solid border-green rounded-lg mb-4">
                  Follwing list show down available service locations which are currently supporting
                  by the {this.state.service}.
                </p>
                <div className="w-full">
                  <table className="table-auto w-full">
                    {this.pricingList.map(item => <tr className="h-12 hover:bg-light-orange hover:border hover:border-solid hover:border-secondary-orange cursor-pointer box-content">
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