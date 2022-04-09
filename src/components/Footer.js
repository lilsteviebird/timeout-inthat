import React from 'react';

import NewCard from './NewCard'
import './Footer.css';

const Footer = (props) => (
<footer className="footer">
    <NewCard onAddCard = {props.onAddCard}/>
</footer>
);

export default Footer;
