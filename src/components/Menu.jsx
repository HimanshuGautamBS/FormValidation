import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (
            <>
            <div style={{paddingLeft:"30px",paddingTop:"20px"}}>
              <NavLink style={{padding:"20px"}} exact to="/">Form1</NavLink> 
              <NavLink exact to="/contact">Form2</NavLink> 
              </div>
            </>
        )
    }
}
