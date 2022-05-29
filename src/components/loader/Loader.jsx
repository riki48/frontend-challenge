import React from "react";
import './loader.less'

function Loader(){
    return (
    <div className="loader">
        <h3>Загружаем котиков...</h3>
        <div className="lds-dual-ring"></div>
    </div>
    )
}

export default Loader;