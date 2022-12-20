import './SearchResult.css';
// import StarIcon from "@mui/icons-material/Star";
import * as React from 'react';
import ReviewForm from './ReviewForm';

function BookingCard( booking ) {
   
    return (
    <div className="booking__card">
      <div className="searchResult">
        <img src={booking.image} alt="" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{booking.location}</p>
            <h3>{booking.title}</h3>
            <p>_____</p>
            <p>{booking.description}</p>
          </div>
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
