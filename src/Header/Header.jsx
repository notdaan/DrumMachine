import React from "react";
import Logo from "../assets/notdanLogo.png"
import './Header.css'

export class Header extends React.Component {
    render(){
        return (
            <div className="Header">
                <nav className="Navbar"> 
                    <img id='nav-logo' src={Logo} alt="!Dan"></img>
                    <h1 className="Page-Title">NotDan Drum Machine</h1>
                    <p className="Page-SubHeading">A Freecodecamp Project</p>
                </nav>
                <p id="instructions">Hit the Keys to play the sounds</p>
                <div className="linebreak"></div>
                
            </div>
        );
    }
}