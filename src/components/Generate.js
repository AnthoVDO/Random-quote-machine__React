import React from 'react';

const Generate = ({changeQuote}) => {
    return (
        <>
       
<button id="new-quote" className="d-block mb-5 btn bg-customRed text-light" onClick={changeQuote} >Generate Quote</button>
           
        </>
    );
};

export default Generate;