import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,  HashRouter, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Route>
      <TopBar />
      < HashRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">{user ? <Home/> :<Register />}</Route>
          <Route path="/login">{user ? <Home/> :<Login />}</Route>
          <Route path="/write">{user ? <Write/> :<Register />}</Route>
          <Route path="/settings">{user ? <Settings/> :<Register />}</Route>
          <Router path="/post/:postId">
            <Single />
          </Router>
       </ HashRouter>
    </Route>
  );
}

export default App;
