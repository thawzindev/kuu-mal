import React from 'react';
import Home from "./components/Home";
import HelpRequestList from "./components/HelpRequestList";
import HelpRequestForm from "./components/HelpRequestForm";
import Volunteer from "./components/Volunteer";
import VolunteerLogin from "./components/VolunteerLogin";
import VolunteerProfile from "./components/VolunteerProfile";
import NotFound from "./components/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  Redirect
} from "react-router-dom";

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => {
      const volunteer = localStorage.getItem('volunteer');
      return <Route {...rest} render={(props) => (
          volunteer !== null
              ? <Component {...props} />
              : <Redirect to='/404' />
          )} 
      />
  }

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/help/lists" component={HelpRequestList}/>
          <Route exact path="/help/request" component={HelpRequestForm}/>
          <Route exact path="/volunteers" component={Volunteer}/>
          <Route exact path="/volunteer/login" component={VolunteerLogin}/>
          <PrivateRoute path='/volunteer/profile' exact component={VolunteerProfile} />
          <Route exact path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  );
}

export default App;
