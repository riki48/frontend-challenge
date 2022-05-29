import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavouriteCats } from "../../actions/cat";
import { setLoader } from "../../reducers/catsReducer.ts";
import FavCat from "./favCat/FavCat";
import './catLikes.less'
import Loader from "../loader/Loader";
import Dummy from "../dummy/Dummy";

function CatLikes(){
    const dispatch = useDispatch();
    const favCats = useSelector(state => state.cats.favouriteCats)
    const loader = useSelector(state => state.cats.loader);
    const totalCount = useSelector(state => state.cats.totalCount)
    const [page, setPage] = useState(0)

    function scrollHandler(e) {
        const {scrollHeight, scrollTop, clientHeight} = e.target;
        if(scrollHeight - ( scrollTop + clientHeight) < 50 && favCats.length < totalCount ){
            setPage(prevPage => prevPage + 1)
        }
    }

    useEffect(()=>{
        dispatch(getFavouriteCats(page))
    },[page])

    if(favCats.length !==0) 
        return (
            <div onScroll={scrollHandler} className="catLikes">
                {favCats.map( (favCat,index) => 
                    <FavCat cat={favCat} key={index}/> 
                )}
                {loader && <Loader/>}
            </div>
        )
    else if(favCats.length == 0 && !loader) return <Dummy/>
    else return <Loader/>
}
export default CatLikes;