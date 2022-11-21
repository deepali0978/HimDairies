import React from "react";
import {NavLink} from 'react-router-dom';
import '../App.css';
function Header1(){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
            <a><NavLink className="navbar-brand" to="/Home">HimDiaries</NavLink></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <li classNameName="nav-link"><NavLink to="/Home" >Home</NavLink></li>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Places">Places</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Food">Food</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Home/Write" >Write</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/Contact">Contact Us</NavLink>
                    </li>
                    </ul>
                </div>
            
        </nav>
        {/* <nav classNameName="navbar navbar-inverse">
        <div classNameName="container-fluid">
            <div classNameName="navbar-header">
            <button type="button" classNameName="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span classNameName="icon-bar"></span>
                <span classNameName="icon-bar"></span>
                <span classNameName="icon-bar"></span>                        
            </button>
            <a classNameName="navbar-brand" >HimDiaries</a>
            </div>
            <div classNameName="collapse navbar-collapse" id="myNavbar">
            <ul classNameName="nav navbar-nav">
                <li classNameName="active"><NavLink to="/Home" >Home</NavLink></li>
                <li classNameName="dropdown">
                <a >Places</a>
                </li>
                <li><a href="#">Page 2</a></li>
                <li><a href="#">Page 3</a></li>
            </ul>
            </div>
        </div>
        </nav> */}
        </>
    )
    
}
export default Header1;
