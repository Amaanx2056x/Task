import './App.css';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {
  const [user, setUser] = useState({
    name:null,
    bal_amount: 0,
    email: null
})
  return (
    <div className="App">
    <Router>
    
    <Navbar user={user} setUser={setUser} />
    <Switch>
       <Route exact path="/">
       <Dashboard user={user} setUser={setUser}/>
       </Route>
    <Route exact path="/register">
    <Register user={user} setUser={setUser} />
    </Route>
    <Route exact path="/login">
    <Login user={user} setUser={setUser} />
    </Route>
  
    </Switch>
    </Router>
    </div>
  );
}

export default App;