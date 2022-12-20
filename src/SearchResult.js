import React from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function SearchResult({ 
    image,
    location,
    title,
    description,
    price
}) {
  return (
    <div className='searchResult'>
        <img src={image} alt="" />
        <FavoriteBorderIcon className='searchResult__heart'/>
        <div className='searchResult__info'>
            <div className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>_____</p>
                <p>{description}</p>
            </div>
            <div className='searchResult__infoBottom'>
                <div className='searchResult__stars'>
                    <StarIcon className='searchResult__star'/>
                    <p>
                        <strong>4.73</strong>
                    </p>
                </div>
                <div className='searchResult__price'>
                    <h2>{price}</h2>
                    <p>TOTAL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult