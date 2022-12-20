import React, { useEffect, useState } from "react";
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
import Login from './Login';


function App() {
  const [listings, setListings] = useState([])
  const [user, setUser] = useState(null);
  console.log("user", user);

  // const navigate = useNavigate();

  useEffect(() => {
    fetch("/user")
    .then((r) => {
      if (r.ok) {r.json()
        .then((currentUser) => setUser(currentUser));
      }
    });
  },[]);

  // function handleLogOut(){
  //   fetch("/logout", {
  //     method: "DELETE"
  //   }).then ((r) => {
  //     if (r.ok) {
  //       setUser(null);
  //       navigate("/login");
  //     }
  //   });
  // }

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
            <Route path="/listings">
              <SearchPage listings = {listings} />
            </Route>
            <Route path="/login">
              <Login user={user} setUser={setUser}/>
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
