import React from 'react';
import Rating from '@mui/material/Rating';
import './preview.css';
import { Reviews } from '@mui/icons-material';
function Preview() {
    
  return(
    <>
   
    <div className='Book3'>
        <div className='r1'>
        <div className='Titl'>
            <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" className='imgs3'></img>
        </div>
        <div className='cont3'>
            <h2 className='ti3'>Title</h2>
            <div className='i1'><pre>Author:    ( Name of Author )</pre></div>
            <div className='i1'><pre>Genre:    (Type of the book)</pre></div>
            <div className='i1'><pre>Language:    (Language in which book is wriiten)</pre></div>
            <div className='i1'><pre>Pages :     (No of Pages)</pre></div>
            <div className='i1'></div>
            <div><h2></h2></div>
        <div className='but'>
            <button id='btn'>Buy</button><br/>
            <button id='btn'>Add to Cart</button>
        </div>
        </div>
        </div>
        
        <div className='borrder'>
            <h2>A Preview on the book: </h2>
            In an essay in this anthology, Khushwant Singh claims that he is not a nice man to know. Whatever 
              the truth of that assertion, there is little question about his skill as a witty, eloquent and entertaining writer.
               This book collects the best of over three decades of the author’s prose, including his finest journalistic pieces, short stories, 
               translations, jokes, plays as well as excerpts from his non-fiction books and novels. Taken together, the pieces in this selection
                (some of which have never been published before) show just 
              why Khushwant Singh is the country’s most widely read columnist and one of its most celebrated authors. 
              In an essay in this anthology, Khushwant Singh claims that he is not a nice man to know. Whatever 
              the truth of that assertion, there is little question about his skill as a witty, eloquent and entertaining writer.
               This book collects the best of over three decades of the author’s prose, including his finest journalistic pieces, short stories, 
               translations, jokes, plays as well as excerpts from his non-fiction books and novels. Taken together, the pieces in this selection
                (some of which have never been published before) show just 
              why Khushwant Singh is the country’s most widely read columnist and one of its most celebrated authors. 
        </div>
       
        <div className='Review'>
        <h2>Customer Review:</h2>
        <h4>Ratings : 4.5/10</h4>
        {/* <Review/>
        <Review/>
        <Review/> */}
        </div>
    </div>
    </>
  );
}

export default Preview;