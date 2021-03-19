import React from 'react';
import Header from "./Header";
import Generator from "./Generator";

const Container = () => {
    return (
        <div className="h-100 d-flex flex-column justify-content-start  align-items-center">
                <Header/>
                <Generator/>
        </div>
    );
};

export default Container;