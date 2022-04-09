import React from 'react';

import Timer from './Timer';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';





const Cards = (props) =>{
    return(
        <div>
        {props.data.length === 0 ? <p>No Inthat Timeouts Found!</p> : 
          <Row xs={1} md={2} className="g-4">
          {props.data.map((card) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{card.Name}</Card.Title>
                  <Timer 
                    cardName = {card.Name} 
                    cardDate = { card.date } 
                    cardHour = {card.Hours} 
                    cardDay = {card.Days}
                    />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>}
        </div>
    );
}

export default Cards;