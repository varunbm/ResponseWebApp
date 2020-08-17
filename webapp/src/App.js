import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomeComponent from "./component/Home/HomeComponent";
import AboutComponent from "./component/about/AboutComponent";
import ServiceComponent from "./component/service/ServiceComponent";
import ContactComponent from "./component/contact/ContactComponent";
import NavbarComponent from "./component/NavBar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/courses" component={ServiceComponent} />
        <Route path="/contact" component={ContactComponent} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
