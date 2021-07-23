import React from 'react';
import Home from "./components/Home";
import HelpRequestList from "./components/HelpRequestList";
import HelpRequestForm from "./components/HelpRequestForm";
import Volunteer from "./components/Volunteer";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/help/lists" component={HelpRequestList}/>
          <Route exact path="/help/request" component={HelpRequestForm}/>
          <Route exact path="/volunteers" component={Volunteer}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
  );
}

export default App;
