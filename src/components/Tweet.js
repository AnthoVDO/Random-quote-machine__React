import React from 'react';
import { Container } from 'react-bootstrap';

const Tweet = () => {
    return (
        <div>
        <Container>
            <button id="tweet-quote"><a href="twitter.com/intent/tweet" target="_blank">Tweet</a></button>
        </Container>
            
        </div>
    );
};

export default Tweet;