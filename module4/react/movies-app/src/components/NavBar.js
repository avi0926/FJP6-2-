import { Component } from "react";
import App from "../App";

 class NavBar extends Component{
    render(){
        return(
        <div style={{display:"flex",padding:'0.5rem'}}>
            <h1>Movies App</h1>
            <h1 style={{marginLeft: '2rem'}}>Favourites</h1>
        </div>
        )
    } 
 }

export default NavBar;