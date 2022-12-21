import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';


function SingleCard( ) {
    const [currentListing, setCurrentListing] = useState({});
    let { listingId } = useParams();

    console.log(listingId, "from single listing params")

    useEffect(() => {
        fetch(`/listings/${listingId}`)
        .then((r) => r.json())
        .then(data => setCurrentListing(data))
      }, [])

      console.log(currentListing)
    

  return (
    <div className='single__card'>
        <h1>Listing</h1>

        <div className="booking__card">
      <div className="searchResult">
        <img src={currentListing.image} alt="" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{currentListing.city} • {currentListing.bedroom}B / {currentListing.bathroom}B</p>
            <h3>{currentListing.title}</h3>
            <h5>{currentListing.amenities}</h5>
            <p>_____</p>
            <p>{currentListing.description}</p>
          </div>
          <div className="searchResult__infoBottom">
            <h4>Reviews</h4>
          </div>
            <div className="searchResult__price">
              <h2>{currentListing.price}</h2>
              <p>TOTAL</p>
              {/* <Link to="/login"> */}
                <Button variant="outlined">Book</Button>
                {/* </Link> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SingleCard