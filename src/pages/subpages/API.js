import React from "react";

class API extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
  } 

  render() {
    return (
      <div className="font-roboto text-dark-gray">
        <div className="mb-6">
          <div className="w-full flex items-end justify-between mb-4">
            <div className="text-lg">Current API Key</div>
            <div className="text-base text-secondary-dark_gray">Valid until 21/10/2022</div>
          </div>
          <div className="w-full bg-light-green border border-solid border-green rounded-lg h-12 pl-4 pr-4 pt-1 pb-1 flex items-center justify-between">
            <div className="w-full cursor-text"></div>
            <div className="material-icons-round text-green cursor-pointer">content_copy</div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-lg mb-4">Generate A New API Key</div>
          <form onSubmit={this.onSubmit}>
            <input type={"text"} placeholder={"Paste your current API key here"} className="w-full h-12 pl-4 pr-4 pt-1 pb-1 border border-solid border-input-stroke outline-orange placeholder:text-base placeholder:font-light placeholder:font-roboto placeholder:text-light-gray rounded-lg"></input>
            <div className="w-full mt-6 flex justify-end">
              <button type={"submit"} className="pl-4 pr-4 pt-2 pb-2 bg-green text-base text-white rounded-lg">Generate</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default API;