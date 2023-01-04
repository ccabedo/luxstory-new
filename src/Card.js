import React from 'react';
import './Card.css';
import { Link} from 'react-router-dom';
import Button from '@mui/material/Button';

function Card({ id, image, title, description, price }) {
  
    return (
    <div className='card'>
        <img src={image} alt={title} />
        <div className='card__info'>
            <h2>{title}</h2>
            <h5>{description}</h5>
            <h4>${price}/ night</h4>
            <Button variant="outlined"><Link to={`/listings/${id}`}>Book</Link></Button>
        </div>
    </div>
  )
}

export default Card