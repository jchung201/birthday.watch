import React from "react";
import PropTypes from "prop-types";
const Home = ({ loggedIn }) => (
  <div className="form-group">
    {loggedIn && <h1>Logged In</h1>}
    <h1>Birthday Watch</h1>
    <p>
      Integrate your google calendar <br />
      to quickly add/edit birthday reminders
    </p>
    <button type="submit">Sign in with google</button>
  </div>
);
Home.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
export default Home;
