import React, { useEffect, useState } from "react";
import './App.css';
import Home from './Home';
import Header from './Header';

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("/listings")
    .then((r) => r.json())
    .then(data => setListings(data))
  }, [])


  return (
    <div className="app">
      <Header />
      <Home listings = {listings} />
      {/*Home*/}
          {/*Header*/}
          {/*Banner*/}
            {/*Search*/}
          {/*Cards*/}
          {/*Footer*/}
      {/*SearchPage*/}

    </div>
  );
}

export default App;
