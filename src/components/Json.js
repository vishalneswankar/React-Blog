import React, { Component } from "react";

import data from "../data";

class Json extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="container json_color">
        {data.map((link) => (
          <div className="card mb-3" key={link.Title}>
            <div className="row no-gutters">
              <div className="col-md-5">
                <img
                  src={require("../images/" + link.Img)}
                  className="card-img"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{link.Title}</h5>
                  <p className="card-text">{link.Desc.fullDesc}</p>
                  <p className="card-text">
                    <small className="text-muted">{link.date}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Json;
