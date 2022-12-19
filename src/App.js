import React, { useEffect, useState } from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("/listings")
    .then((r) => r.json())
    .then(data => setListings(data))
  }, [])


  return (
    <div className="app">

      <Router>
        <Header />
          <Switch>
            <Route path="/search">
              <SearchPage listings = {listings} />
            </Route>

            <Route path="/">
              <Home listings = {listings} />
            </Route>

          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
