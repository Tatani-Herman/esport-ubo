import NavBar from "./components/Navbar";
import Leagues from "./features/leagues/leagues";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
        </Switch>
      </Router>
      </div>
  );
}

export default App;
