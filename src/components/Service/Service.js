import React from "react";

class Service extends React.Component {
  constructor(props) {
    super(props);
    this.onExpand = this.onExpand.bind(this);
    this.state = { expand: false }
    this.id = this.props.id;
  }

  onExpand(event) {
    this.setState({expand: !this.state.expand});
    event.target.style.transform = `rotate(${180*!this.state.expand}deg)`;
  }

  render() {
    return (
      <div className="font-roboto text-dark-gray">
        <div className="bg-light-orange border border-solid border-secondary-orange rounded-lg p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-lg">{this.props.serviceName}</div>
            {
              (this.props.isUsing) ? <div className="pl-4 bg-red-600 pr-4 pt-2 pb-2 rounded-lg text-white flex justify-center items-center ml-4 cursor-pointer">Delete</div> : <div className="bg-green pl-4 pr-4 pt-2 pb-2 rounded-lg text-white flex justify-center items-center ml-4 cursor-pointer">Add</div>
            }
          </div>
          <div className="flex items-center">
            <div className="text-base text-orange underline cursor-pointer mr-9">Check Charges</div>
            <div className="flex items-center text-secondary-dark_gray mr-9">
              <div className="material-symbols-rounded text-2xl text-secondary-dark_gray">home_pin</div>
              <div>{`Available In ${this.props.available}`}</div>
            </div>
            <div className="flex items-center text-secondary-dark_gray mr-9">
              <div className="material-symbols-rounded text-2xl text-secondary-dark_gray">storefront</div>
              <div>{`Service Users ${this.props.serviceUsers}`}</div>
            </div>
            <div className="material-symbols-rounded text-2xl text-orange cursor-pointer select-none" onClick={this.onExpand}>expand_circle_down</div>
          </div>
        </div>
        {this.state.expand ? <div className="bg-light-orange border border-solid border-secondary-orange p-4 rounded-lg text-dark-gray mt-1">
          <div className="text-2xl font-medium mb-6">{this.props.serviceName}</div>
          <div className="flex justify-between">
            <div className="w-64">
              <div className="text-lg font-medium mb-2">Address</div>
              <p className="text-base">{this.props.address}</p>
            </div>
            <div className="w-64">
              <div className="text-lg font-medium mb-2">Contact</div>
              <p className="text-base">{`Email : ${this.props.email}`}</p>
            </div>
            <div className="w-64">
              <div>
                <div className="text-lg font-medium mb-2">Available</div>
                <p className="text-base">{`Available in ${this.props.available}`}</p>
              </div>
            </div>
            <div className="w-64">
              <div>
                <div className="text-lg font-medium mb-2">Other Informations</div>
                <p className="text-base">{`Service users ${this.props.serviceUsers}`}</p>
                <p className="text-base">{`Completed orders ${this.props.completed}`}</p>
                <p className="text-base">{`Joined date ${this.props.joined}`}</p>
              </div>
            </div>
          </div>
        </div> : undefined}
      </div>
    );
  }
}

export default Service;