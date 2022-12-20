import React from 'react';
import './Card.css';
import { Link} from 'react-router-dom';
import FeaturedList from './FeaturedList';

function Card({ id, image, title, description, price }) {
  
    return (
    <div className='card'>
        <img src={image} alt={title} />
        <div className='card__info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
            <Link to={`/listings/${id}`}>more info</Link>
        </div>
    </div>
  )
}

export default Card