import React from "react"

import { Link } from "react-router-dom";
function NavMenu() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Software Project Finder</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/signinpage">Sign In</Link>
            </li>
            <li class="nav-item">
              <Link to="/signuppage">Sign Up</Link>
            </li>
            <li class="nav-item">
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav> 
    );
}

export default NavMenu;