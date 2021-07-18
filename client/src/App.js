import './App.css';
import React,{useState,createContext} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const UserContext= createContext()
function App() {
  const [user, setUser] = useState({
    name:null,
    bal_amount: 0,
    email: null
})
  return (
    <UserContext.Provider value={[user,setUser]}>
    <div className="App">
    <Router>
    
    <Navbar />
    <Switch>
       <Route exact path="/">
       <Dashboard />
       </Route>
    <Route exact path="/register">
    <Register />
    </Route>
    <Route exact path="/login">
    <Login />
    </Route>
  
    </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
export {UserContext}