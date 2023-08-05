import React from "react";


import { BsTwitter } from 'react-icons/bs'
import { FaTumblr } from 'react-icons/fa'
import { useState, useEffect} from "react";
 



const Quotes = () => {
    const [quote,setQuote] = useState('');
    const [author,setAuthor] = useState('');

    useEffect(()=>{
      getQuote()          
    }, [])


    const getQuote=()=>{
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
         .then(res => res.json())
         .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
           setQuote(randomQuote.quote)
           setAuthor(randomQuote.author)

         })
    }


    const handleClick = ()=>{
        getQuote();
    }


  return (
    <div id="quote-box">
      <div id="text"><p>{quote}</p>
      </div>

      <div id="author">
        <p>-- {author}</p>
      </div>

      <div id="buttons">
        <div className="social-media">

            <a id="twet-quote" href="https://twitter.com/"><span><BsTwitter /></span></a>
            <a id="twet-quote" href="https://www.tumblr.com/"><span><FaTumblr /></span></a>

        </div>
        <button onClick={handleClick} className="btn">New Quote</button>
      </div>
    </div>
  );
};

export default Quotes;
