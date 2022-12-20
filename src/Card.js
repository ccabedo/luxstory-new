import React from 'react';
import './Card.css';
import { Link} from 'react-router-dom';
import Button from '@mui/material/Button';
// import FeaturedList from './FeaturedList';

function Card({ id, image, title, description, price }) {
  
    return (
    <div className='card'>
        <img src={image} alt={title} />
        <div className='card__info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
            <Button variant="outlined"><Link to={`/listings/${id}`}>Book</Link></Button>
        </div>
    </div>
  )
}

export default Card