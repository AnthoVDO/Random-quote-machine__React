import React from 'react';
import Generate from './Generate';
import Quote from './Quote';
import Tweet from './Tweet';

const Generator = () => {
    return (
        <div className="w-100 h-75 d-flex flex-column justify-content-center  align-items-center mb-auto mt-auto">
        
        
        <Generate />   
        <Quote/>
        <Tweet/>
            
 
            
        </div>
    );
};

export default Generator;