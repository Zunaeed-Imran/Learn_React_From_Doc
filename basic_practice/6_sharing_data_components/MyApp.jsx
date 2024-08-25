//  this file will be using for (props) pass useState.

import PropTypes from "prop-types"; // up to the file






function MyApp({count, onClick}) {

  return (
    <div>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default MyApp


MyApp.propTypes = {
  // this code will be down to the file
  count: PropTypes.number,
  onClick: PropTypes.func,
};