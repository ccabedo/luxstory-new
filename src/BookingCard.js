import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StarIcon from "@mui/icons-material/Star";
import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import { handleBreakpoints } from '@mui/system';
import { Button } from '@mui/material';

function BookingCard({ image, title, description, price, location }) {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
        color: '#ff6d75',
        },
    }); 

    const [form, setForm] = useState({})
    let handleReviewChange = (e) => {
        let review = e.target.review;
        let value = e.target.value
        setForm({
            ...form,
            [review]: value,
        });
    };

    // let handleReviewPost = (e) => {
    //     e.preventDefault();
    //     fetch(`/bookings/${bookings.id}`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(form),
    //         })
    //         .then((res)=> res.json())
    //         .then((data)=>setBookings([data, ...bookings]))
    // };
   
    return (
    <div className="booking__card">
      <div className="searchResult">
        <img src={image} alt="" />
        <div className="searchResult__info">
          <div className="searchResult__infoTop">
            <p>{location}</p>
            <h3>{title}</h3>
            <p>_____</p>
            <p>{description}</p>
          </div>
          <div className="searchResult__infoBottom">
            <h4>Leave a Review</h4>
            <form >
            <input 
            // onChange={handleReviewChange}
            type="text"
            name="review"
            placeholder="add a review" 
            />
            <Button variant="outlined" type="submit>">Edit</Button>
            <Box
                sx={{
                  '& > legend': { mt: 2 },
                }}
            >
            <Typography component="legend">Rate your experience</Typography>
            <StyledRating
                name="customized-color"
                defaultValue={2}
                getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
            </Box>
            <Button variant="outlined" type="submit>">Add Review</Button>
            <Button variant="outlined" type="submit>">Delete</Button>
            
            </form>
          </div>
            {/* <div className="searchResult__price">
              <h2>{price}</h2>
              <p>TOTAL</p>
            </div> */}
          </div>
        </div>
      </div>
  );
}

export default BookingCard;
