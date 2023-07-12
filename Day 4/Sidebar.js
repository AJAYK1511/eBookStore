import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import './sidebar.css';


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
                    <h4><a href='/myAcc'>My Account</a></h4>
                    <h4><a href='/sdff'>Library</a></h4>
                    <h4><a href='/sdg'>Your books</a></h4>
                    <h4><a href='/sdf'>Downloads</a></h4>
                    <h4><a href='/sff'>Settings</a></h4>
                    <h4><a href='/'>Logout</a></h4>
                </div>
            </div>
        </div>
        
    )
};
export default SideBar;