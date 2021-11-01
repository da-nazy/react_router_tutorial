import { useState } from "react";
import { BrowserRouter,Route,Switch,Redirect } from "react-router-dom";
import Header from "./Component/Header";
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";
import Profile from "./Component/Pages/Profile";
import "./App.css";
import NotFound from "./Component/Pages/NotFound";
import Post from "./Component/Pages/Post";
function App() {

  const [login,setLogin]=useState(false);

  return (
    <BrowserRouter basename="tutorial">
    <div className="App">
     <h1>React Router Tutorial</h1>
     <Header/>
    
    <button onClick={()=>setLogin(!login)}>{login?"logout":"Login"}</button>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/about' component={About}/>
    <Route path='/profile'>
      {/** simple {login?<Profile/>:<Redirect to="/"/>} */}
      <Profile login={login}/>
      </Route>
    <Route path='/post/:id' component={Post}/>
    <Route  component={NotFound}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
