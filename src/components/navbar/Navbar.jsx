import React, { useState } from "react";
import './navbar.less'
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <header>
            <nav className="navbar"> 
                <div className="navbar__menu">
                    { <div className="navbar__btn">
                        <NavLink to="/"><p>Все котики</p></NavLink> 
                    </div>}
                    { <div className="navbar__btn">
                        <NavLink to="/favourite"><p>Любимые котики</p></NavLink> 
                    </div>}
            </div>
            </nav>
        </header>
    )
}
export default Navbar;