import React from "react";
import Navbar from "./navbar";
import SideBar from "./Sidebar";
import './topdeals.css';
function TopDeals()
{
    return(
      <div>
        <div className="pos"><SideBar /></div>
        <div className="main">
          <h2>Top deals specially made for you....</h2>

          <h3 id="floatlefttod">Today</h3>
           <br></br> <br></br> <br></br>
          <div className="mydeals">
            <div className="firstdeal">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1jQJwZnV0oykWNlBd2ILf2zThfL-4X5HbSvWRx-c&s" id="firstdealimg"></img>
            </div>
            <div className="secodeal">
            <h3>The Godfather</h3>
            <h5> - Mario Puzo</h5>
            <p><b>Offer Price : $7.85</b></p>
            <h3></h3>
            <p><b>Original Price: $12.85</b></p>
            <h3></h3>
            <p>Ratings : 3.8/5</p>
            </div>
          </div>

          <div className="mydeals1">
            <div className="firstdeal1">
            <img src="https://m.media-amazon.com/images/I/71CW2McyifL._AC_UF1000,1000_QL80_.jpg" id="firstdealimg1"></img>
            </div>
            <div className="secodeal">
            <h3>Ponniyin Selvan</h3>
            <h5> - Kalki</h5>
            <p><b>Offer Price : $34.29(5 Volumes)</b></p>
            <h3></h3>
            <p><b>Original Price: $45.28</b></p>
            <h3></h3>
            <p>Ratings : 4.2/5</p>
            </div>
          </div>

          <div className="mydeals">
            <div className="firstdeal">
            <img src="https://m.media-amazon.com/images/I/91UgGEMbClL._AC_UF1000,1000_QL80_.jpg" id="firstdealimg"></img>
            </div>
            <div className="secodeal">
            <h3>Mahabharatham</h3>
            <h5> - Vyaasar</h5>
            <p><b>Offer Price : $11.56</b></p>
            <h3></h3>
            <p><b>Original Price: $15.45</b></p>
            <h3></h3>
            <p>Ratings : 3.8/5</p>
            </div>
          </div>



          <h3 id="floatlefttod">This Month</h3>
           <br></br> <br></br> <br></br>
          <div className="mydeals">
            <div className="firstdeal">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1jQJwZnV0oykWNlBd2ILf2zThfL-4X5HbSvWRx-c&s" id="firstdealimg"></img>
            </div>
            <div className="secodeal">
            <h3>The Godfather</h3>
            <h5> - Mario Puzo</h5>
            <p><b>Offer Price : $7.85</b></p>
            <h3></h3>
            <p><b>Original Price: $12.85</b></p>
            <h3></h3>
            <p>Ratings : 3.8/5</p>
            </div>
          </div>

          <div className="mydeals1">
            <div className="firstdeal1">
            <img src="https://m.media-amazon.com/images/I/71CW2McyifL._AC_UF1000,1000_QL80_.jpg" id="firstdealimg1"></img>
            </div>
            <div className="secodeal">
            <h3>Ponniyin Selvan</h3>
            <h5> - Kalki</h5>
            <p><b>Offer Price : $34.29(5 Volumes)</b></p>
            <h3></h3>
            <p><b>Original Price: $45.28</b></p>
            <h3></h3>
            <p>Ratings : 4.6/5</p>
            </div>
          </div>



        </div>
      </div>
    );
}

export default TopDeals;