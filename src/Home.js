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
            <ul className="cards">
                {listings.map((listing)=> (<Card key = {listing.id} {...listing} />))}
            </ul>
        </div>

    </div>

  )
}

export default Home