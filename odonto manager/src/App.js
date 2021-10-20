import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import UserProfile from "./components/Profile/UserProfile";
import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/LoginPage";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <Login />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="https://www.google.com">
          <Redirect to="https://www.google.com" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
