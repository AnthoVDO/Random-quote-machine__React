import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Quote = () => {
    return (
        <div>
        <Container>
        <Row>
            <p id="text">Rien ne se crée, rien ne se perds, tout se transforme</p>
        </Row>
            <Row className="justify-content-md-end">
                <h3 id="author">Lavoisier</h3>
            </Row>
        
        </Container>
        
            
        </div>
    );
};

export default Quote;