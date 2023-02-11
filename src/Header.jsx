import { React } from 'react'
import logo from './assets/notdanLogo.png'
import './Header.css'

export default class Header extends React.Component{
    render(){
      return (
        <div>
            <nav id='navbar' className="navbar">
              <div id='nav-container' className="container d-flex flex-column justify-content-center ">
                <img id='nav-logo' src={logo} alt="!Dan"></img>
                  <h1 id='page-heading'>!Dan Drum Machine</h1>
                  <p id='page-subheading'>a freecodecamp project</p>
              </div>
            </nav>
        </div>
    );}
}