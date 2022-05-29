import React from "react";
import { NavLink } from "react-router-dom";
import './dummy.less'

function Dummy(){
    return(
        <div className="dummy">
            <h2>Здесь нет котиков :3</h2>
            <NavLink to="/"><h2>Смотреть котиков!</h2></NavLink>
        </div>
    )
}
export default Dummy;