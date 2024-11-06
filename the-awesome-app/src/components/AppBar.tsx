'use client'

import { AppThemeContext } from "@/state/context/AppThemeContext";
import Link from "next/link";
import React, { useContext } from "react";

export default React.memo(function AppBar(){

    const theme = useContext(AppThemeContext);
    
    const mode = theme.mode;
    
    function handleSwitch(){
        theme.changeMode(theme.mode === 'light'? 'dark' : 'light');
    }

    return (
        <nav className={`navbar navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">React</Link>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/gadgets">Gadgets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/viewcart">View Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">Login</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-warning" onClick={handleSwitch}>Switch Theme</button>
            </li>
          </ul>
        </div>
      </nav>
    )
})