import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Generate from './Generate';
import Quote from './Quote';
import Tweet from './Tweet';

const Generator = () => {
    return (
        <div>
        <Container >
        <Row className="justify-content-md-center">
            <Generate />
        </Row>
        <Row className="justify-content-md-center"><Quote/></Row>
        <Row className="justify-content-md-center"><Tweet/></Row>
            
            
        
        </Container>
        
            
        
            
        </div>
    );
};

export default Generator;