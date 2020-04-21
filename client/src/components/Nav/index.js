import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Nav.css"
import API from "../../utils/API"

function Nav({ page }) {


  const handleLogout = () => {
    console.log("got here home")
    API.logout().then(res => {
      console.log(res)

    });
  }
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <Link className="navbar-brand" to="/home">
          Quarantivities
        </Link>
      </div>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                (window.location.pathname === "/home")
                  //   window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
              </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Cooking") ? "nav-link active" : "nav-link"}
              to={{
                pathname: "/activities",
                state: {
                  category: 'Cooking'
                }
              }}
            >Cooking</Link>
            {/* <button onClick={()=> {loadCategory("Cooking")}}>Cooking</button> */}
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Crafts") ? "nav-link active" : "nav-link"}
              to={{
                pathname: '/activities',
                state: {
                  category: 'Crafts'
                }
              }}>Crafts</Link>
            {/* <button onClick={() => { loadCategory("Crafts") }}>Crafts</button> */}
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Fitness") ? "nav-link active" : "nav-link"}
              to={{
                pathname: '/activities',
                state: {
                  category: 'Fitness'
                }
              }}>Workout</Link>
            {/* <button onClick={() => { loadCategory("Fitness") }}>Workout</button> */}
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(page === "Random") ? "nav-link active" : "nav-link"}
              to={{
                pathname: '/activities',
                state: {
                  category: 'Random'
                }
              }}>Random</Link>
            {/* <button onClick={() => { loadCategory("Random") }}>Random</button> */}
          </li>
        </ul>
      </div>

      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className={(window.location.pathname === "/signin") ? "nav-link active" : "nav-link"} onClick={handleLogout} to={{
              pathname: '/signin'
            }}>Logout</Link>
            {/* <button onClick={handleLogout}>Logout</button> */}
          </li>
        </ul>
      </div>
      </div>

    </nav>
  )
}

export default Nav;