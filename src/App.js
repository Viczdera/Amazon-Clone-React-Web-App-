import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./stateprovider";
function App() {
  const[{},dispatch]=useStateValue();
  //creating a listener to know who actually logged in
  useEffect(()=>{
    //will oly run once when th app component loads

    auth.onAuthStateChanged(authUser =>{
      console.log(
          'the user is >>>', authUser
      )
      if (authUser){
        //logged in
        dispatch({
          type: 'SetUser',
          user:authUser
        })
      }else{
        //logged out
        dispatch({
          type: 'SetUser',
           user:null
        })
      }
    })
  },[])
  
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