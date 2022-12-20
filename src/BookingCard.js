import './SearchResult.css';
// import StarIcon from "@mui/icons-material/Star";
import * as React from 'react';
import ReviewForm from './ReviewForm';

function BookingCard( booking ) {
   
    return (
    <div className="booking__card">
      <div className="searchResult">
        <img src={booking.listing.image} alt="" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{booking.listing.city} • {booking.listing.bedroom}B / {booking.listing.bathroom}B</p>
            <h3>{booking.listing.title}</h3>
            <h5>{booking.listing.amenities}</h5>
            <p>_____</p>
            <p>{booking.listing.description}</p>
          </div>
          <h4>Reviews</h4>
          <h5>{booking.review}</h5>
          <div className="searchResult__infoBottom">
            <h4>Leave a Review</h4>
            <ReviewForm booking={booking} />
          </div>
            {/* <div className="searchResult__price">
              <h2>{booking.price}</h2>
              <p>TOTAL</p>
            </div> */}
          </div>
        </div>
      </div>
  );
}

export default BookingCard;
