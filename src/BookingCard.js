import './SearchResult.css';
// import StarIcon from "@mui/icons-material/Star";
import { useState } from 'react';
import ReviewForm from './ReviewForm';
import { Button } from "@mui/material";
// import { FaRegHeart } from "react-icons/fa";
// import {AiFillHeart} from "react-icons/ai";
import './BookingCard.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

function BookingCard( booking ) {
  const [isFavortite, setIsFavorite] = useState(false)
  console.log(booking)
  const [rating, setRating] = useState();


  function handleDelete(){
    fetch(`/bookings/${booking.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if(res.ok){
        console.log(res)
      } else {
        res.json().then(console.log)
      }
    })
  }
   
    return (
    <div className="booking__card">
      <div className="searchResult">
        <img src={booking.listing.image} alt="" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{booking.listing.city} • {booking.listing.bedroom}B / {booking.listing.bathroom}B</p>
            <h3>{booking.listing.title}</h3>
            <p>_____</p>
            <p>{booking.listing.description}</p>
          </div>
          <br></br>
          <h4>Review</h4>
          <br></br>
          <h5>{booking.review}</h5>
          <br></br>
          <br></br>
          <div className="searchResult__infoBottom">
            <h4>Your Review</h4>
            <br></br>
          <ReviewForm booking={booking} />
          </div>
          <br></br>
          <br></br>
          <Button onClick={handleDelete} variant="outlined" type="submit>">
          Delete
        </Button>
          </div>
          <div className='Favorite'>
          <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
        </div>
        </div>
      </div>
  );
}

export default BookingCard;
