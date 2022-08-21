import React from "react";
import ConfigServices from "../../components/ConfigServices/ConfigServices";
import AvailableServices from "../../components/AvailableServices/AvailableServices";

class System extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="mb-6">
          <ConfigServices />
        </div>
        <div className="mb-6">
          <AvailableServices />
        </div>
      </div>
    );
  }
}

export default System;