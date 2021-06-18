import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          {/*Home and firstpage route. Default route is always at the buttom*/}
          <Route path="/">
            <Header />  
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;