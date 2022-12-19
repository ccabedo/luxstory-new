import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home({ listings }) {

  return (
    <div className="home">
        {/* <h1>Home component</h1> */}
        <Banner />

        <div className='home__section'>
            {listings.map((listing)=> (<Card key = {listing.id} {...listing} />))}
        </div>

    </div>

  )
}

export default Home