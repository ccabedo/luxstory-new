import React from 'react'
import './SearchResult.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function SearchResult({ 
    id,
    image,
    location,
    title,
    description,
    price
}) {
  return (
    <div className='searchResult'>
        <img src={image} alt="" />
        <div className='searchResult__info'>
            <div className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>_____</p>
                <p>{description}</p>
            </div>
            <div className='searchResult__infoBottom'>
                <div className='searchResult__price'>
                    <h2>${price}</h2>
                    <Button variant="outlined" > <Link to={`/listings/${id}`}>Book Now</Link> </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult