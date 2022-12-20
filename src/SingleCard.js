import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function SingleCard() {
    const [currentListing, setCurrentListing] = useState({});
    let { listingId } = useParams();

    console.log(listingId, "from single listing params")

    useEffect(() => {
        fetch(`/listings/${listingId}`)
        .then((r) => r.json())
        .then(data => setCurrentListing(data))
      }, [])


  return (
    <div className='single__card'>
        <h4>hello</h4>
    </div>
  );
}

export default SingleCard