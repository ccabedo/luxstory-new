import React from 'react'
import BookingCard from './BookingCard';

function FeaturedList({ bookings }) {

  const bookingComponent = bookings.map((booking) => (
    <BookingCard key={booking.id} {...booking} />
  ))


  return (
    <div>
        <h1>Your Bookings</h1>
        {bookingComponent}
    </div>
  )
}

export default FeaturedList