// practice reading props in event handler.

import PropTypes from 'prop-types'; // up to the file




function AlertButton({ message, children }) {
  return (
    <div>
      <button onClick={() => alert(message)}>
        {children}
      </button>
    </div>
  );
}

export default function ToolBar() {
  return (
    <div>
      <AlertButton message={'done'}>l</AlertButton>

      <AlertButton message={'check again'}>ok</AlertButton>
    </div>
  );
}



AlertButton.propTypes = {
  // this code will be down to the file
  message: PropTypes.string,
  children: PropTypes.string
};
