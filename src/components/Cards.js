import React from 'react';

import CountdownTimer from './CountdownTimer';


import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Cards = (props) =>{


    // const calculateTimeLeft = (card) =>{
    //     console.log(card);
    //     const cardDate = new Date(card.cardDate);
    //     let endTimer = new Date(card.cardDate);

    //     endTimer.setDate(endTimer.getDate() + parseInt(card.cardDay));
    //     endTimer.setTime(endTimer.getTime() + (card.cardHour*60*60*1000));
        
    //     return endTimer;

    // }

    return(
        <div>
        {props.data.length === 0 ? <p>No Inthat Timeouts Found!</p> : 
          <Row xs={1} md={2} className="g-4">
            <Col>
          {props.data.map((card) => (
              <Card>
                <Card.Body>
                  <Card.Title>{card.Name}</Card.Title>
                  {
                    <CountdownTimer targetDate = { new Date(card.targetDate) }/>
                  }
                </Card.Body>
              </Card>
          ))}
            </Col>
        </Row>}
        </div>
    );
}

export default Cards;