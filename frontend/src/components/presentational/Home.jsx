import React from "react";
import PropTypes from "prop-types";
import "../../public/main.css";
const Home = ({ loggedIn }) => (
  <div className="home_container_content">
    {loggedIn && <h1>Logged In</h1>}
    <h1 className="home_header">Birthday Watch</h1>
    <p className="home_description">
      Integrate your google calendar <br />
      to quickly add/edit birthday reminders
    </p>
    <button className="home_google_button" type="submit">
      Sign in with google
    </button>
  </div>
);
Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
export default Home;
