import PropTypes from 'prop-types';

function MyApp({count, onClick}) {

  return (
    
    <div>
      <button onClick={onClick}>
        count {count} Times.
      </button>
    </div>
  )
}

export default MyApp


MyApp.propTypes = {
  count: PropTypes.number,
  onClick: PropTypes.func
};