import React from 'react'
import "./style.css"
import logo from "./Resources/logo.svg"

function Navbar() {
  return (
    <>
    <div>
    <div class="navBar">
            <div class="logo"><img src={logo} /></div>
            <div class= "menuGroup">
                <div class="menus">
                    <div>Home</div>
                    <div>About</div>
                    <div>Projects</div>
                    <div>Contact</div>
                    <div class= "Button"> Enrol Today</div>
                </div>
                <div class="navBarBtnSmallScreen">
                    <img src="../src/Resources/menu icon.svg" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar