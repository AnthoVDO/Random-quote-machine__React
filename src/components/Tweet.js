import React from 'react';

const Tweet = ({randomNumber, quoteList}) => {
    return (
        <>
        
            <button 
             
            className="mt-5 d-block btn btn-primary ">
            <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quoteList[randomNumber].quote}--${quoteList[randomNumber].author}`}
            className="text-light" 
            target="_blank"
            rel="noopener noreferrer">
            Tweet
            </a></button>
        
            
        </>
    );
};

export default Tweet;