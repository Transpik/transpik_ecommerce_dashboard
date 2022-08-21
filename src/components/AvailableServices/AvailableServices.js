import React from "react";
import Service from "../Service/Service";


class AvailableServices extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="text-dark-gray font-roboto">
        <div className="text-lg mb-4 ml-4">Assign States To Services</div>
        <div>
          <Service 
            serviceName={"Anton Delivery Service"}
            available={"Sri Lanka"}
            serviceUsers={12}
            address={"No 365, Temple Street Colombo 07"}
            email={"antondelivery@gmail.com"}
            completed={4587}
            joined={"2022.10.21"}
          />
        </div>
      </div>
    );
  }
}

export default AvailableServices;