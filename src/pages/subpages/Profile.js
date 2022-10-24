import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onProfileUpdate = this.onProfileUpdate.bind(this);
  }

  onPasswordChange(event) {
    event.preventDefault();
  }

  onProfileUpdate(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="font-roboto text-dark-gray">
        <div className="mb-6">
          <div className="text-lg mb-4 ml-4">Email Address</div>
          <input type={"text"} value={"sample@gmail.com"} disabled className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
        </div>
        <div className="mb-6">
          <div className="text-lg mb-4 ml-4">Password</div>
          <form onSubmit={this.onPasswordChange}>
            <div className="w-full flex justify-between items-center">
              <input type={"password"} placeholder="Type your current password" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
              <input type={"password"} placeholder="Confirm your password" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
            </div>
            <div className="w-full mt-6">
              <button type={"submit"} className="pl-4 pr-4 pt-2 pb-2 bg-green text-base text-white rounded-lg">Change</button>
            </div>
          </form>
        </div>
        <div className="mb-6">
          <form onSubmit={this.onPasswordChange}>
            <div className="w-full flex justify-between items-center">
              <div>
                <div className="text-lg mb-4 ml-4">Platform Name</div>
                <input type={"text"} placeholder="Type your platfrom name" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
              </div>
              <div>
                <div className="text-lg mb-4 ml-4">Site URL</div>
                <input type={"url"} placeholder="Enter site url" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
              </div>
            </div>
            <div className="w-full mt-6">
              <button type={"submit"} className="pl-4 pr-4 pt-2 pb-2 bg-green text-base text-white rounded-lg">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;