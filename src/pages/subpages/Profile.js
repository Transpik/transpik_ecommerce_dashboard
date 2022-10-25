import React from "react";
import axios from "axios";

//temp
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY2NzYzMDcsImV4cCI6MTY2Njg0OTEwNywiYXVkIjoiZWNvbW1lcmNlIiwiaXNzIjoiaHR0cHM6Ly90cmFuc3Bpa2FwaS5vbnJlbmRlci5jb20iLCJzdWIiOiI2MzU3NzYzY2JmYzExZWNkNjVhYTY3MWQifQ.Ep75c19AKC4Ck2dXv6VmKqGdRUYrB1AvMNkf981WS5A';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.name = React.createRef();
    this.url = React.createRef();
    this.oldPassword = React.createRef();
    this.newPassword = React.createRef();
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onProfileUpdate = this.onProfileUpdate.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/users',
      mode: 'cors',
      withCredentials: true
    }).then(response => {
      const { email, url, name } = response.data.data.user;
      this.email.current.value = email;
      this.url.current.value = url ?  url : 'Not set';
      this.name.current.value = name ? name : 'Not set';
    }).catch(error => {
      console.log(error);
    })
  }

  onPasswordChange(event) {
    event.preventDefault();
    axios({
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/users/security',
      mode: 'cors',
      withCredentials: true,
      data: {
        old_password: this.oldPassword.current.value,
        new_password: this.newPassword.current.value
      }
    }).then(response => {
      const { email, url, name } = response.data.data.user;
      this.email.current.value = email;
      this.url.current.value = url ?  url : 'Not set';
      this.name.current.value = name ? name : 'Not set';
    }).catch(error => {
      console.log(error);
    })
  }

  onProfileUpdate(event) {
    event.preventDefault();
    axios({
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': accessToken
      },
      url: 'http://localhost:8080/users/ecommerce_services/details',
      mode: 'cors',
      withCredentials: true,
      data: {
        name: this.name.current.value,
        url: this.url.current.value,
      }
    }).then(response => {
      const { email, url, name } = response.data.data.user;
      this.email.current.value = email;
      this.url.current.value = url ?  url : 'Not set';
      this.name.current.value = name ? name : 'Not set';
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="font-roboto text-dark-gray">
        <div className="mb-6">
          <div className="text-lg mb-4 ml-4">Email Address</div>
          <input ref={this.email} type={"text"} value={"sample@gmail.com"} disabled className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
        </div>
        <div className="mb-6">
          <div className="text-lg mb-4 ml-4">Password</div>
          <form onSubmit={this.onPasswordChange}>
            <div className="w-full flex justify-between items-center">
              <input ref={this.oldPassword} type={"password"} placeholder="Type your current password" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
              <input ref={this.newPassword} type={"password"} placeholder="Type new password" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
            </div>
            <div className="w-full mt-6">
              <button type={"submit"} className="pl-4 pr-4 pt-2 pb-2 bg-green text-base text-white rounded-lg">Change</button>
            </div>
          </form>
        </div>
        <div className="mb-6">
          <form onSubmit={this.onProfileUpdate}>
            <div className="w-full flex justify-between items-center">
              <div>
                <div className="text-lg mb-4 ml-4">Platform Name</div>
                <input ref={this.name} type={"text"} placeholder="Type your platfrom name" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
              </div>
              <div>
                <div className="text-lg mb-4 ml-4">Site URL</div>
                <input ref={this.url} type={"url"} placeholder="Enter site url" className="text-dark-gray w-[550px] h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
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