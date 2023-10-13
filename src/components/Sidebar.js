import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import './sidebar.css';
import { Link } from "react-router-dom";

function SideBar()
{
    const [clas,setClas]=useState("hgg");
    const view=()=>{
        if(clas=="hgg")
        {
            setClas("hgf");            
        }
        else{
            setClas("hgg");
        }
    }
    return(
        <div className="side">
            <button onClick={view}><DehazeIcon ></DehazeIcon></button>
            <div className={clas}>
                <div className="vel">
                    <h4><Link to='/myaccount'>My Account</Link></h4>
                    <h4><Link to='/library'>Library</Link></h4>
                    <h4><Link to='/yourbooks'>Your books</Link></h4>
                    <h4><Link to='/downloads'>Downloads</Link></h4>
                    <h4><Link to='/settings'>Settings</Link></h4>
                    <h4><Link to='/'>Logout</Link></h4>
                </div>
            </div>
        </div>
        
    )
};
export default SideBar;