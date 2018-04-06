import React, {Component} from 'react'
import {Link} from 'react-router-dom';



function Header() {

    return (
      <div className="container">
        <h1>Book store app</h1>
        <Link to={`/login/`}>Login</Link>
      </div>
    );
}



export default Header;

