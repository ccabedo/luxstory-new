import React, { useState } from 'react';
import './ReviewForm.css';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });

function ReviewForm({ booking }) {
    const [form, setForm] = useState({})
    let handleChange = (e) => {
        let review = e.target.review;
        let value = e.target.value
        setForm({
            ...form,
            [review]: value,
        });
    };

    function handleDelete(){
        fetch(`bookings/${booking.id}`)
      }

  return (
    <div className="review__form">
         <form >
            <input 
            onChange={handleChange}
            type="text"
            name="review"
            placeholder="add a review" 
            />
                    <Button 
            variant="outlined" 
            type="submit>">Add Review</Button>
            <Button 
            variant="outlined" 
            type="submit>"
            onClick={handleDelete}>Delete</Button>
        </form>

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
        
    </div>
  )
}

export default ReviewForm