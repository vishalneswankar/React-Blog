import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Json from "./components/Json";
import Api from "./components/Api";
import News from "./components/News";
import Website from "./components/Website";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/Json" component={Json}></Route>
            <Route path="/Api" component={Api}></Route>
            <Route path="/News" component={News}></Route>
            <Route path="/Website" component={Website}></Route>
            <Route path="*" component={Json} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
