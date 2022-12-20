import React, { useEffect, useState } from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from './SearchPage';
import Login from './Login';
import FeaturedList from "./FeaturedList";
import SingleCard from "./SingleCard";


function App() {
  const [listings, setListings] = useState([])
  const [bookings, setBookings] = useState([])
  const [user, setUser] = useState(null);
  const [search, setSearch]= useState("");
  console.log("user", user);


  useEffect(() => {
    fetch("/user")
    .then((r) => {
      if (r.ok) {r.json()
        .then((currentUser) => setUser(currentUser));
      }
    });
  },[]);

  function handleLogOut(){
    fetch("/logout", {
      method: "DELETE"
    }).then ((r) => {
      if (r.ok) {
        setUser(null);
        <Link path to="/login"/>;
      }
    });
  }

  useEffect(() => {
    fetch("/listings")
    .then((r) => r.json())
    .then(data => setListings(data))
  }, [])

  useEffect(() => {
    fetch("/bookings")
    .then((r) => r.json())
    .then(data => setBookings(data))
  }, [])

  let filtered = listings.filter((listing) =>
  listing.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="app">

      <Router>
        <Header onSearch={setSearch} user={user} bookings={bookings} handleLogOut={handleLogOut}/>
          <Switch>
            <Route path="/listings/:listingsId">
              <SingleCard listings={listings} />
            </Route>
            <Route path="/listings">
              <SearchPage listings = {listings} />
            </Route>
            {/* <Route path={`/listings/${listings.id}`}>
              <FeaturedList listings = {listings} />
            </Route> */}
            <Route path="/bookings">
              <FeaturedList bookings={bookings}/>
            </Route>
            <Route path="/login">
              <Login user={user} setUser={setUser}/>
            </Route>
            <Route path="/">
              <Home listings = {filtered} />
            </Route>
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
