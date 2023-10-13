import React from "react";
import Navbar from "./navbar";
import SideBar from "./Sidebar";
import './authors.css';
function Authors()
{
    return(
      <div>
         <div className="pos"><SideBar /></div>
         <div className="main">
         <h2>Authors you would Like.....</h2>
         <h3>The description will give a clear view about the Author's work</h3>
         <div className="myautho">
         <dl className="mylistauth">
  
         <dt>1  Jane Austen(1775 – 1817)</dt>
  <dd>               - Love and Friendship ,
Sense and sensibility in 1811,
Pride and prejudice in 1813.</dd>
  <dt>2 Agatha Christe(1890 – 1976)</dt>
  <dd>- The secret adversary in 1922,
The murder on the links in 1923,
The murder of roger Ackroyd</dd>

<dt>3  R K Narayan(1906 – 2001)</dt>
  <dd>- Swami and friends in 1935,
Bachelor of arts in 1937,
The English teacher </dd>
<dt>4  Kushwant Singh( 1915 – 2014)</dt>
  <dd> - The train to Pakistan in 1956,
I shall not hear the nightingale in 1959,
History of Sikhs in 1963</dd>
<dt>1  Jane Austen(1775 – 1817)</dt>
  <dd>               - Love and Friendship ,
Sense and sensibility in 1811,
Pride and prejudice in 1813.</dd>
  <dt>2 Agatha Christe(1890 – 1976)</dt>
  <dd>- The secret adversary in 1922,
The murder on the links in 1923,
The murder of roger Ackroyd</dd>

<dt>3  R K Narayan(1906 – 2001)</dt>
  <dd>- Swami and friends in 1935,
Bachelor of arts in 1937,
The English teacher </dd>
<dt>4  Kushwant Singh( 1915 – 2014)</dt>
  <dd> - The train to Pakistan in 1956,
I shall not hear the nightingale in 1959,
History of Sikhs in 1963</dd></dl>
         </div>
         </div>
      </div>
    );
}

export default Authors;