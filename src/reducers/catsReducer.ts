const defaultState = {
    cats: [],
    loader: false,
    favouriteCats: [],
    totalCount: null
}

enum Actions{
   ADD_CATS,
   SET_LOADER,
   ADD_FAVOURITE_CATS,
   REMOVE_FAVOURITE_CAT,
   SET_TOTAL_COUNT
}

export const catsReducer = (state = defaultState, action) => {
        switch (action.type) {
            case Actions.ADD_CATS:
                return  {...state, cats: [...state.cats, ...action.payload]}
            case Actions.SET_LOADER:
                return {...state, loader: action.payload}
            case Actions.ADD_FAVOURITE_CATS:
                return {...state, favouriteCats : [...state.favouriteCats, ...action.payload]}
            case Actions.REMOVE_FAVOURITE_CAT:
                return {...state, favouriteCats: state.favouriteCats.filter(el => el.id != action.payload)}
            case Actions.SET_TOTAL_COUNT:
                return {...state, totalCount: action.payload}
            default:
                return state;
        }
}
export const addCats = cats => ({type: Actions.ADD_CATS, payload: cats})
export const setLoader = payload => ({type: Actions.SET_LOADER, payload})
export const addFavouriteCats = cats => ({type: Actions.ADD_FAVOURITE_CATS, payload: cats})
export const removeFavouriteCat = id => ({type: Actions.REMOVE_FAVOURITE_CAT, payload: id})
export const setTotalCount = count => ({type: Actions.SET_TOTAL_COUNT, payload: count})