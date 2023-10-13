import Login from  './components/Login';
import ReactDOM from "react-dom/client";
import SignUp from './components/SignUp';
import Navbar from './components/navbar';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/Sidebar';
import Home from './components/home';
import Arrivals from './components/arrivals';
import Authors from './components/authors';
import TopDeals from './components/topDeals';
import Ebooks from './components/Ebooks';
import Store from './components/Store';
import Preview from './components/preview';
import MyAccount from './components/Myaccount';
import Scroll from './components/Scroll';
import Feedback from './Feedback';
const Navi=()=>{
  const location=useLocation();
  if(location.pathname!='/' && location.pathname!='/sign' && location.pathname!='/myAcc')
  {
    return(
      <>
      <Navbar loc={location.pathname}></Navbar>
      <SideBar ></SideBar>
      </>
      )
  }
  if(location.pathname=='/home')
  {
    return(
      <>

      </>
      )
  }
  else{
    return null;
  }
}
// const Ver=()=>
// {
//   const nlocation=useLocation();
//   if(nlocation.pathname=='/newArr')
//   {
//     document.getElementById('hell').style.backgroundColor='orange';
//   }
//   else 

//   {
//       document.getElementById('hell').style.backgroundColor='white';
//   }
// }
// const Ver1=()=>
// {
//   location=useLocation();
//   if(location.pathname=='/home')
//   {
//     document.getElementById('hel').style.backgroundColor='orange';
//   }
//   else 
  
//   {
//       document.getElementById('hel').style.backgroundColor='white';
//   }
// }
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Navi/>
      <Routes>
        <Route path="/" element={<Login />} >
        </Route>
        <Route path="/sign" element={<SignUp />} >
          </ Route>
        <Route path="/home" element={<Home />} >
        </Route>
        <Route path="/newarrivals" element={<Arrivals />} >
        </Route>
        <Route path="/featuredauthors" element={<Authors />} >
        </Route>
        <Route path="/topdeals" element={<TopDeals />} >
        </Route>
        <Route path="/ebooks" element={<Ebooks />} >
        </Route>
        <Route path="/aboutus" element={<Store />} >
        </Route>
        <Route path="/myaccount" element={<MyAccount />} >
        </Route>
        <Route path="/preview" element={<Preview />} >
        </Route>
        <Route path="/scroll" element={<Scroll />} >
        </Route>
        <Route path="/feedback" element={<Feedback />} >
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
