import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
// import StyledRating from "@mui/material/StyledRating";
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Typography from '@mui/material/Typography';


function ReviewForm({ booking }) {
  const [showPicker, setShowPicker] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [review, setReview] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    fetch(`/bookings/${booking.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review: review,
      }),
    });
  }

  // const onEmojiClick = (event, EmojiClickData) => {
  //   console.log(EmojiClickData.target.src);
  //   setChosenEmoji(EmojiClickData.target.src);
  // };

  return (
    <div className="review__form">
      <form onSubmit={onSubmit}>
        {/* {chosenEmoji ? (
          <p>
            Your Emoji: <img src={chosenEmoji}></img>
          </p>
        ) : (
          <span>No Emoji</span>
        )} */}
        <TextField
          id="outlined-basic"
          label="add a review"
          variant="outlined"
          onChange={(e) => setReview(e.target.value)}
          type="textarea"
          name="review"
          placeholder="add a review"
          value={review && chosenEmoji}
        />
        {/* <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => setShowPicker((val) => !val)}
        /> */}

        {/* {showPicker && (
          <EmojiPicker
            pickerStyle={{ width: "50%" }}
            onEmojiClick={onEmojiClick}
          />
        )} */}

        <br></br>
        <Button variant="outlined" type="submit>">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ReviewForm;
