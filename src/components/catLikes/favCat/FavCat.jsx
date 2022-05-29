import React from "react";
import { addToFavourites, removeFromFavourites } from "../../../actions/cat";
import { useDispatch } from "react-redux";

import './favCat.less'

function FavCat({cat}){
    
    const dispatch = useDispatch();

    function removeFavImg(){
        dispatch(removeFromFavourites(cat.id))
    }
    return(
        <div className='cat__card favcat__card'>
            <img className="cat__img" src={cat.image.url} alt="" />
            <div onClick={removeFavImg} className="cat__like favcat__like"></div>
        </div>
    )
}

export default FavCat; 