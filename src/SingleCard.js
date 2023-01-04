import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import './SingleCard.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function SingleCard({ user, setBookings }) {
  const [isFavortite, setIsFavorite] = useState(false)
    const [currentListing, setCurrentListing] = useState({});
  
    let { listingId } = useParams();

    console.log(listingId, "from single listing params")

    useEffect(() => {
        fetch(`/listings/${listingId}`)
        .then((r) => r.json())
        .then(data => setCurrentListing(data))
      }, [])

      console.log(currentListing)


      function handleBooking(){
        fetch("/bookings",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            user_id: user.id,
            listing_id: currentListing.id
          })
        })
        .then(res => res.json())
        .then(data => setBookings(data))
      }
    
  return (
    <div className='single__card'>
        <h1>Listing</h1>
        <div className="booking__card">
      <div className="searchResult">
      { isFavortite ? <button className='btn' onClick={()=> setIsFavorite(false)}><FavoriteIcon /></button> : <button className='btn-clicked' onClick={() => setIsFavorite(true)}><FavoriteBorderIcon /></button>}
        <img src={currentListing.image} alt="" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{currentListing.city} • {currentListing.bedroom}B / {currentListing.bathroom}B</p>
            <h3>{currentListing.title}</h3>
            <p>_____</p>
            <p>{currentListing.description}</p>
            <h5></h5>
          </div>
          <div className="searchResult__infoBottom">
          </div>
            <div className="searchResult__price">
              <h2>${currentListing.price}</h2>
                <Button onClick={handleBooking} variant="outlined">Book</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard