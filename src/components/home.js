// import React from "react";
// import './home.css';
// import SideBar from "./Sidebar";
// import { SocialIcon } from "react-social-icons";
// import { Icon } from "@mui/material";
// import Preview from "./preview";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useState,useEffect } from "react";

// function Home()
// {
//   const token=localStorage.getItem("jwtToken");
//   const [books,setBooks]=useState([]);
//   useEffect(()=>
//   {
//     console.log(token);
//       axios.get("http://localhost:8081/books/getb",{
//         headers:{
//           Authorization:"Bearer "+token
//         }
//       })
//       .then((res)=>
//       {
//         console.log(res);

//       }).catch(error=>{
//         console.log(error)
//       })
//   },[])
//   const nav1=useNavigate();
//   const red=()=>
//   {
//     nav1('/preview');
//   }
//     return(
//       <div className="homee">
//         <div className="pos"><SideBar/></div>
//          <div className="main">
//             <div className="mainone">
//                 <h2>Books for you</h2>
//                 <div className="gfgf">
//                 <img src="https://m.media-amazon.com/images/I/610yBOir7ZL._AC_UF1000,1000_QL80_.jpg" id="asdfg" onClick={red}></img>
//                 <p>Little Book of Joy</p></div>
//                 <div className="gfgf">
//                 <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/Wings_of_Fire_by_A_P_J_Abdul_Kalam_Book_Cover.jpg" id="asdfg" onClick={red}></img>
//                 <p>Wings of Fire</p></div><div className="gfgf">
//                 <img src="https://cdn.img.gen.in/assets/business/2596/portfolio/34101/2596_637810795315736053.jpg?rendered=true&width=500" id="asdfg" onClick={red}></img>
//                 <p>Playing It My Way</p></div> 
//                 <div className="gfgf">
//                 <img src="https://m.media-amazon.com/images/I/71CW2McyifL._AC_UF1000,1000_QL80_.jpg" id="asdfg" onClick={red}></img>
//                 <p>Ponniyin Selvan</p></div>
//                 <div className="gfgf">
//                 <img src="https://m.media-amazon.com/images/I/91UgGEMbClL._AC_UF1000,1000_QL80_.jpg" id="asdfg" onClick={red}></img>
//                 <p>Mahabaratham</p></div>
//                 <div className="gfgf">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1jQJwZnV0oykWNlBd2ILf2zThfL-4X5HbSvWRx-c&s" id="asdfg" onClick={red}></img>
//                 <p>The Godfather</p></div>
//                 <div className="gfgf">
//                 <img src="https://img.etimg.com/photo/msid-99580257/the-blue-umbrella.jpg" id="asdfg" onClick={red}></img>
//                 <p>The Blue Umbrella</p></div>
//                 <div className="gfgf">
//                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b164aa10953207.560ef1bcba0e7.jpg" id="asdfg" onClick={red}></img>
//                 <p>Hamlet</p></div>               
//                 <br></br>


//                 <h2>Recent Collections.....</h2>
//                 <div className="seco">
//                   <div className="expl">
//                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b164aa10953207.560ef1bcba0e7.jpg" id="asdfg"></img> </div> 
//                 <div className="expla">
//                   <h2 id="changeco">Hamlet</h2>
//                   <h5 id="changeco">- William Shakespeare</h5>
//                 <p>The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words. 
//                   Set in Denmark, the play depicts Prince Hamlet and his attempts to exact revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.
//                 Hamlet is considered among the "most powerful and influential tragedies in the English language", with a story capable of "seemingly endless retelling and adaptation by others".</p>  
//                 </div>
//                 </div>




//                 <div className="seco">
//                   <div className="expl">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg" id="asdfg"></img> </div> 
//                 <div className="expla">
//                   <h2 id="changeco">The Great Gatsby</h2>
//                   <h5 id="changeco">- Scott Fitzgerald</h5>
//                 <p>The Great Gatsby is a 1925 novel by American writer F. 
//                   Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.
//                  The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins,
//                  who persuaded Fitzgerald to revise the work over the following winter.  </p>  
//                 </div>
//                 </div>


//                 <br></br>


//                 <div className="know">
//                  <h2>Welcome to open Library</h2>
//                  <h3 className="leftext">Some knowledge facts about books......</h3>
//                 <div className="dfg"><h4>Did you know, the fear of running out of something to read is called Abibliophobia. The book is in production and measures 100 micrometres by 70 micrometres. The book is in production and measures 100 micrometres by 70 micrometres.</h4></div>
//                 <div className="dfg"><h4>The world’s smallest book is Teeny Ted from Turnip Town.This book is now the worlds smallest and it is verified by The Guiness Book of Records.  The book is in production and measures 100 micrometres by 70 micrometres.</h4></div>
//                 <div className="dfg"><h4>There are four law books bound in human skin at the Harvard University Library. Anthropodermic bibliopegy is the term given to binding books in human skin. There are actually several books known to be bound in human skin.</h4></div>
//                 <div className="dfg"><h4>This is the longest fact we have on our list. People say the longest sentence to ever be printed in literature belongs to Victor Hugo. The claim is that in Les Misérables there is a sentence which is 823 words long and has an interest.</h4></div>
//                 <div className="dfg"><h4>The most extensive collection of free books online is available on Google Books.People say the longest sentence to ever be printed in literature belongs to Victor Hugo. The claim is that in Les Misérables there is a sentence which is 823 words long. </h4></div>
//                 </div>
                
//           </div>
//          </div>
//          <div className="foot">
//          <div className='footot'>
//         <div className='link'>
//        <h3 className='head'>Links</h3>
//        <ul id='ju'>
//        <li> <a className='linking' href='https://www.bbc.com/news'>BBC</a></li>
//        <li> <a className='linking' href='https://www.aljazeera.com/'>Al jazeera</a></li>
//        <li> <a className='linking' href='https://www.polimernews.com/'>Polimer news</a></li>
//        <li> <a className='linking' href='https://www.timesnownews.com/'>Times now</a></li>
//        <li> <a className='linking' href='https://edition.cnn.com/'>CNN</a></li>
//        <li> <a className='linking' href='https://news.sky.com/'>Sky</a></li>
//        </ul>
//        </div>
//        <div className='media'>
//         <h3 className='head'>Follow us on</h3>
//       <div className='some'>
//       <div> <SocialIcon className='i' url="https://twitter.com/BBC" style={{fill:"#ffffff",width: "40px", height: "40px"}} fgColor="#ffffff"/></div>
//       <div><SocialIcon className='i' url="https://www.instagram.com/bbcnews/?hl=en"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
//       <div><SocialIcon className='i' url="https://www.linkedin.com/company/bbc/?originalSubdomain=in"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
//       <div><SocialIcon className='i' url="https://www.facebook.com/bbc/"style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
//       <div> <SocialIcon className='i' url="https://www.youtube.com/c/bbcnews" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
//       <div> <SocialIcon className='i' url="https://www.reddit.com/r/bbc/" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      
//        </div>
//        </div>
//        </div>
//       <div id='last'>Copyright © 2023 www.eBooks retrive.com</div>
  
//        </div>
//       </div>
//     );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import './home.css';
import SideBar from "./Sidebar";
import { SocialIcon } from "react-social-icons";
import { Icon } from "@mui/material";
import Preview from "./preview";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const token = localStorage.getItem("jwtToken");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/books/getb", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then((res) => {
        setBooks(res.data); // Assuming the fetched data is an array of book objects with properties name and img_url
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const nav1 = useNavigate();
  const red = () => {
    nav1('/preview');
  };

  return (
    <div className="homee">
      <div className="pos"><SideBar /></div>
      <div className="main">
        <div className="mainone">
          <h2>Books for you</h2>
         
          {books.map((book, index) => (
            <div className="gfgf" key={index}>
              <img src={book.image_url} id="asdfg" onClick={red} alt="Book Cover" />
              <p color="red">{book.ebook_name}</p>
            </div>
          ))}
          <br /><div className="collecton">
          <h2>Recent Collections.....</h2>
                 <div className="seco">
                   <div className="expl">
                 <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b164aa10953207.560ef1bcba0e7.jpg" id="asdfg"></img> </div> 
                 <div className="expla">
                   <h2 id="changeco">Hamlet</h2>
                   <h5 id="changeco">- William Shakespeare</h5>
                 <p>The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet (/ˈhæmlɪt/), is a tragedy written by William Shakespeare sometime between 1599 and 1601. It is Shakespeare's longest play, with 29,551 words. 
                   Set in Denmark, the play depicts Prince Hamlet and his attempts to exact revenge against his uncle, Claudius, who has murdered Hamlet's father in order to seize his throne and marry Hamlet's mother.
                 Hamlet is considered among the "most powerful and influential tragedies in the English language", with a story capable of "seemingly endless retelling and adaptation by others".</p>  
                 </div>
                 </div>
                 <div className="seco">
                  <div className="expl">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/330px-The_Great_Gatsby_Cover_1925_Retouched.jpg" id="asdfg"></img> </div> 
                 <div className="expla">
                   <h2 id="changeco">The Great Gatsby</h2>
                   <h5 id="changeco">- Scott Fitzgerald</h5>
                <p>The Great Gatsby is a 1925 novel by American writer F. 
                   Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.
                  The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins,
                  who persuaded Fitzgerald to revise the work over the following winter.  </p>  
                 </div>
                 </div>
                 </div>
          <br />

          <div className="know">
          <h2>Welcome to open Library</h2>
                  <h3 className="leftext">Some knowledge facts about books......</h3>
                <div className="dfg"><h4>Did you know, the fear of running out of something to read is called Abibliophobia. The book is in production and measures 100 micrometres by 70 micrometres. The book is in production and measures 100 micrometres by 70 micrometres.</h4></div>
               <div className="dfg"><h4>The world’s smallest book is Teeny Ted from Turnip Town.This book is now the worlds smallest and it is verified by The Guiness Book of Records.  The book is in production and measures 100 micrometres by 70 micrometres.</h4></div>
               <div className="dfg"><h4>There are four law books bound in human skin at the Harvard University Library. Anthropodermic bibliopegy is the term given to binding books in human skin. There are actually several books known to be bound in human skin.</h4></div>
                <div className="dfg"><h4>This is the longest fact we have on our list. People say the longest sentence to ever be printed in literature belongs to Victor Hugo. The claim is that in Les Misérables there is a sentence which is 823 words long and has an interest.</h4></div>
                <div className="dfg"><h4>The most extensive collection of free books online is available on Google Books.People say the longest sentence to ever be printed in literature belongs to Victor Hugo. The claim is that in Les Misérables there is a sentence which is 823 words long. </h4></div>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className='footot'>
          <div className='link'>
            {/* Add your Links JSX here */}
          </div>
          <div className='media'>
         <h3 className='head'>Follow us on</h3>
       <div className='some'>
       <div> <SocialIcon className='i' url="https://twitter.com/BBC" style={{fill:"#ffffff",width: "40px", height: "40px"}} fgColor="#ffffff"/></div>&nbsp;
       <div><SocialIcon className='i' url="https://www.instagram.com/bbcnews/?hl=en"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
       <div><SocialIcon className='i' url="https://www.linkedin.com/company/bbc/?originalSubdomain=in"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
       <div><SocialIcon className='i' url="https://www.facebook.com/bbc/"style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
       <div> <SocialIcon className='i' url="https://www.youtube.com/c/bbcnews" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
       <div> <SocialIcon className='i' url="https://www.reddit.com/r/bbc/" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      
        </div>
        </div>
        </div>
       <div id='last'>Copyright © 2023 www.eBooks retrive.com</div>
  
     </div>
       </div>
  );
}

export default Home;
