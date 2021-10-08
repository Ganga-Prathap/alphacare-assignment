import { BrowserRouter, Route, Switch} from "react-router-dom";

import Login from './components/Login'

import Home from "./components/Home"
import Profile from "./components/Profile";
import Subreddit from "./components/Subreddit";

import ProtectedRoute from "./components/ProtectedRoute"




import "./App.css"

const App = () => (
  // <Login />
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/user-profile" component={Profile} />
      <ProtectedRoute exact path="/subreddits" component={Subreddit} />
    </Switch>
  </BrowserRouter>
);

export default App;