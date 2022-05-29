import React, {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCats } from '../../actions/cat';
import Cat from './cat/Cat';
import './catList.less'
import Loader from '../loader/Loader';
import { setLoader } from '../../reducers/catsReducer.ts';

function CatList(){
    const dispatch = useDispatch();
    const cats = useSelector(state => state.cats.cats)
    const loader = useSelector(state => state.cats.loader)
    const totalCount = useSelector(state => state.cats.totalCount)
    const [page, setPage] = useState(0)

    function scrollHandler(e) {
        const {scrollHeight, scrollTop, clientHeight} = e.target;
        if(scrollHeight - ( scrollTop + clientHeight) < 50 && cats.length < totalCount ){
            setPage(prevPage => prevPage + 1)
        }
    }
    useEffect(()=>{
            dispatch(getCats(page));
    },[page])


    if(cats.length !== 0 )
        return (
            <div onScroll={scrollHandler}  className="catList">
                {cats.map(cat => 
                    <Cat cat={cat} key={cat.id}/>
                )}
                {loader && <Loader/>}
            </div>
        )
    else return <Loader/>
}

export default CatList; 