import axios from "../../node_modules/axios/index";
import { addCats,setLoader,addFavouriteCats,removeFavouriteCat,setTotalCount  } from "../reducers/catsReducer.ts";
export function getCats(page){
    return async dispatch => {
        try {
            dispatch(setLoader(true))
            const res = await axios.get('https://api.thecatapi.com/v1/images/search',
            { 
                headers: {"x-api-key": "6177dfca-e5f1-4c52-9d99-455b260f37e9" },
                params:{"limit": 15, page, "order": "ASC"} 
            });
            dispatch(setTotalCount(res.headers["pagination-count"]))
            dispatch(addCats(res.data))
            dispatch(setLoader(false))
        } catch (error) {
            console.log(error);
        }
    }
}
export function addToFavourites(image_id){
    return async dispatch => {
        try {
            const res = await axios.post("https://api.thecatapi.com/v1/favourites",{
                image_id
            },{
                headers: {"x-api-key": "6177dfca-e5f1-4c52-9d99-455b260f37e9" },
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export function getFavouriteCats(page){
    return async dispatch => {
      try {
        dispatch(setLoader(true))
        const sub_id = localStorage.getItem('sub_id')
        const res = await axios.get("https://api.thecatapi.com/v1/favourites",
        { 
            headers: {"x-api-key": "6177dfca-e5f1-4c52-9d99-455b260f37e9" },
            params: { "limit": 15, page} 
        })
        dispatch(setTotalCount(res.headers["pagination-count"]))
        dispatch(addFavouriteCats(res.data))
        dispatch(setLoader(false))
      } catch (error) {
          console.log(error);
      }
    }
}
export function removeFromFavourites(favourite_id){
    return async dispatch => {
        try {
            dispatch(removeFavouriteCat(favourite_id))
            const res = await axios.delete(`https://api.thecatapi.com/v1/favourites/${favourite_id}`,
            {
                headers: {"x-api-key": "6177dfca-e5f1-4c52-9d99-455b260f37e9"}
            })
        } catch (error) {
            console.log(error)
        }
    }
}