import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom'
import Dummy from "./dummy/Dummy";
import './app.less'
import CatList from "./catList/CatList";
import CatLikes from "./catLikes/CatLikes";
function App(){
    return(
        <BrowserRouter>
            <div className="app">
                <Navbar></Navbar>
                <Switch>
                    <Route path="/favourite" component={CatLikes}/>
                    <Route path="/" component={CatList}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;