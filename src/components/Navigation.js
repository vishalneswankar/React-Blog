import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul className="nav justify-content-center mb-4 navigation">
        <li className="nav-item">
          <Link className="nav-link" to="/Json">
            Json
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Api">
            Coronavirus Api
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/News">
            News Api
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Website">
            Website
          </Link>
        </li>
      </ul>
    );
  }
}
export default Navigation;
