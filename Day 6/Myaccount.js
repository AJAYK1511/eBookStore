import React, { useState } from "react";
import './MyAccount.css';
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";

function MyAccount(props)
{
  const [editing, setEditing] = useState(false);
  const [Email, setEmail] = useState('<Username>');
  const [Age, setAge] = useState('20');
  const [Address, setAddress] = useState('3/60/1B,Ganapathi Nagar,Ariyalur');
  const [Study, setStudy] = useState('Sri Krishna College of Engineering and Technology');
  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
  }
  const handleChange1 = (event) => {
    setAge(event.target.value);
  }
  const handleChange2 = (event) => {
    setAddress(event.target.value);
  }
  const handleChange3 = (event) => {
    setStudy(event.target.value);
  }
    return(
        <div className="wholeacc">
            <div className="imasg">
              <center><img src="https://cdn-icons-png.flaticon.com/512/61/61205.png" id="proimaged"></img></center></div>
            <div className="imassg"><pre><b><span>{Email}</span></b></pre></div>
            <div><center>
            <table id="profilet">
  <tr>
    <td>Name </td>
    <td>{editing ? (
        <input type="text" value={Email} onChange={handleChange}/>
      ) : (
        <span>{Email}</span>
      )}</td>
  </tr>
  <tr>
    <td>Mail Id </td>
    <td>{props.username}</td>
  </tr>
  <tr>
    <td>Age </td>
    <td>{editing ? (
        <input type="text" value={Age} onChange={handleChange1}/>
      ) : (
        <span>{Age}</span>
      )}</td>
  </tr>
  <tr>
    <td>Address  </td>
    <td>{editing ? (
        <input type="text" value={Address} onChange={handleChange2}/>
      ) : (
        <span>{Address}</span>
      )}</td>
  </tr>
  <tr>
    <td>Institution  </td>
    <td>{editing ? (
        <input type="text" value={Study} onChange={handleChange3}/>
      ) : (
        <span>{Study}</span>
      )}</td>
  </tr>
</table>
     
      {editing ? (
        <button onClick={handleSave} id="butt">Save</button>
      ) : (
        <div>
        <button onClick={handleEdit} id="butt">Edit Profile</button>&nbsp;&nbsp;
         <Link to='/'><button id="butt">Logout</button></Link></div>
      )}
     </center>
            </div>
     
        </div>
    )
}

const mapstateToprops=(state)=>{
    return{
        username:state.username
    }
}

export default connect(mapstateToprops)(MyAccount);