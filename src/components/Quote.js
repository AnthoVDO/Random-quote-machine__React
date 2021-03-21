import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const Quote = ({quoteList, randomNumber}) => {

   

    return (
        <div className="h-50 d-flex flex-column justify-content-center  align-items-center flex-wrap bg-customOrange rounded mr-3 ml-3 ">
            <p id="text" className="mt-5 d-block mb-auto mt-auto text-center mr-3 ml-3 text-customBlue h4"><FaQuoteLeft className="mb-3" /> {quoteList[randomNumber].quote}</p>
            <h3 id="author" className=" d-block align-self-end mr-4 mb-4 text-customBlue h5"><BsDash/>{quoteList[randomNumber].author}</h3>
   
        </div>
    );
};

export default Quote;