import React from 'react';
import './SearchPage.css';
import Button from '@mui/material/Button';
import SearchResult from './SearchResult';

function SearchPage({ listings }) {
  return (
    <div className="searchPage">
        <div className='searchPage__info'>
            <p>62 stays • 26 August to 30 August • 2 guest</p>
            <h1>Stays Nearby</h1>
            <Button variant="outlined">Cancelation Flexibility</Button>
            <Button variant="outlined">Type of Place</Button>
            <Button variant="outlined">Price</Button>
            <Button variant="outlined">Rooms and beds</Button>
            <Button variant="outlined">More filters</Button>
        </div>

        {listings.map((listing)=> (<SearchResult key = {listing.id} {...listing} />))}
    </div>
  )
}

export default SearchPage