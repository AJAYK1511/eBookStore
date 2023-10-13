import React from 'react';
import {  Link, useLocation } from "react-router-dom";
import './nav.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Listele=(props)=>{
  if(props.loc=="/"+props.name.toLowerCase().replace(" ",""))
  {
    return(
    <li className='sele'><Link to={"/"+props.name.toLowerCase().replace(" ","")}>{props.name}</Link></li>);
  }
  else{
    return(
    <li className='ele'><Link to={"/"+props.name.toLowerCase().replace(" ","")}>{props.name}</Link></li>);
  }
}
function Navbar(props){
  //  const[cla,setClas1]=useState("cvvv");
  //   const viewf=()=>{
  //       if(cla=="cvvv")
  //       {
  //           setClas1("cvv");            
  //       }
  //       else{
  //           setClas1("cvvv");
  //       }
  //   }
  const list=["Home","New Arrivals","Top Deals","Featured Authors","eBooks","About Us","My Account","Feedback"];
  const listele=list.map((ele)=><Listele loc={props.loc} name={ele}></Listele>);
  return (
    <div>
  <div className='gg'>  
    <ul>
      {listele}
    </ul>
  </div>
  <div>
  </div>
  </div>
  );
}
export default Navbar;
