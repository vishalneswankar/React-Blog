import React, { Component } from "react";
import Active from "../images/active.png";
import Death from "../images/death.png";
import Recover from "../images/recover.png";

class Api extends Component {
  constructor() {
    super();
    this.state = {
      corona: [],
      country: [],
      search: "",
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  componentDidMount() {
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=json", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "082e87fee1mshb91d386b0dbe4f7p189831jsn67828d7738c8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          corona: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((countr) => {
        this.setState({
          country: countr.statewise,
        });
      });
  }
  render() {
    // console.log(this.state.country);
    // console.log("State " + this.state.country.state);
    let filtereState = this.state.country.filter((countries) => {
      return (
        countries.state
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    return (
      <div className="container corona">
        <h2 className="pb-5 pt-5 title_head">
          World Coronavirus <span>Tracker</span>
        </h2>
        {this.state.corona.map((coronas) => (
          <div className="row" key={coronas.confirmed}>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={Active} alt="icons" /> Active
                  </h5>
                  <p className="card-text">{coronas.confirmed}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={Death} alt="icons" /> Deaths
                  </h5>
                  <p className="card-text">{coronas.deaths}</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <img src={Recover} alt="icons" /> Recovered
                  </h5>
                  <p className="card-text">{coronas.recovered}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="row india_corona">
          <h2 className="pb-5 col-md-8 pt-5 title_head">
            India Coronavirus <span>Tracker</span>
          </h2>
          <div className="col-md-4 pt-5 search_box_corona">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search State"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
              />
            </div>
          </div>

          {filtereState &&
            filtereState.map((countries) => (
              <div className="col-md-3 mb-3" key={countries.state}>
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">{countries.state}</p>

                    <span className="badge badge-primary">
                      Active {countries.active}
                    </span>
                    <span className="badge badge-danger ml-1 mr-1">
                      Death {countries.deaths}
                    </span>
                    <span className="badge badge-success">
                      Recovered {countries.recovered}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Api;
