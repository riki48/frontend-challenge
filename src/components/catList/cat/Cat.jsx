import React from "react";
import { addToFavourites } from "../../../actions/cat";
import { useDispatch } from "react-redux";
import './cat.less'
import fullSvg from '../../../assets/img/favourite_full.svg'

function Cat({cat}){
    const dispatch = useDispatch();
    
    function addFavImg(e){
        dispatch(addToFavourites(cat.id));
        e.target.style = `background: url(${fullSvg}) no-repeat;background-size:contain`
    }
    return(
        <div className='cat__card'>
            <img className="cat__img" src={cat.url ? cat.url : cat.image.url} alt="" />
            <div onClick={addFavImg} className="cat__like" id="cat__like"></div>
        </div>
    )
}

export default Cat; 