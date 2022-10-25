import React from "react";
import Service from "../../components/Service/Service";
import axios from "axios";

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2NzYzMDcsImV4cCI6MTY2Njg0OTEwNywiYXVkIjoiZWNvbW1lcmNlIiwiaXNzIjoiaHR0cHM6Ly90cmFuc3Bpa2FwaS5vbnJlbmRlci5jb20iLCJzdWIiOiI2MzU3NzYzY2JmYzExZWNkNjVhYTY3MWQifQ.Ep75c19AKC4Ck2dXv6VmKqGdRUYrB1AvMNkf981WS5A';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = { services: []}
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
        const verification = service.verification_data;
        services.push({
          serviceName:verification.business_name,
          available:"Sri Lanka",
          serviceUsers:service.service_users.length,
          address:verification.location.address,
          email:service.email,
          completed:4587,
          joined:"2022.10.21",
          isUsing:(usingServices.indexOf(service._id) >= 0) ? true : false,
          id:service._id
        })
      })
    }
    return services;
  }

  componentDidMount() {
    this.getData().then(services => this.setState({ services: services }));
    
  }

  render() {
    return (
    <div>
      <div className="text-lg mb-4 ml-4">Available Delivery Services</div>
      { this.state.services.map(service => 
          <Service
            serviceName={service.serviceName}
            available={service.available}
            serviceUsers={service.serviceUsers}
            address={service.address}
            email={service.email}
            completed={service.completed}
            joined={service.joined}
            isUsing={service.isUsing}
            id={service.id}
          ></Service>
      ) }
    </div>);
  }
}

export default Services;