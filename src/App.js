import NavBar from "./components/Navbar";
import Leagues from "./features/leagues/leagues";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import League from "./features/league/league";
import Teams from "./features/teams/Teams";
import Team from "./features/team/Team";

function App() {
  return (
    <div style={{ height: "100%" }}>
    <Router>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/leagues" />;
          }}
        />
        <Route exact path="/leagues">
          <Leagues />
        </Route>
        <Route exact path="/leagues/:id">
            <League />
        </Route>
        <Route exact path="/teams">
            <Teams />
          </Route>
          <Route exact path="/teams/:id">
            <Team />
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
