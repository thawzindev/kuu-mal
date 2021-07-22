import React from 'react';
import Home from "./components/Home";
import HelpRequestList from "./components/HelpRequestList";
import NotFound from "./components/NotFound";
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
          <Route exact path="/kuu-mal/lists" component={HelpRequestList} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  );
}

export default App;
