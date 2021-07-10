import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=({user,setUser})=>{
  return (
    <>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">Navbar</Link>
 
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    
    {user.name !== null ? 
      <>
       <li className="nav-item">
        <a className="nav-link" onClick={
          ()=>{
            setUser({
              name:null,
              bal_amount: 0
            })
          }
          
        }>Logout</a>
      </li>
      </>
      :
      <>
       <li className="nav-item">
        <Link className="nav-link" to="/">Dashboard</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
      </li>
      </>
    }
 
     
    </ul>
  </div>
</nav>
    </>
    )
}
export default Navbar