import React from 'react';

import CountdownTimer from './CountdownTimer';


// import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



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
              <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {card.Name}
                    </Typography>
                    <CountdownTimer targetDate = { card.targetDate }/>
                </CardContent>
              </Card>

          ))}
            </Col>
        </Row>}
        </div>
    );
}

export default Cards;