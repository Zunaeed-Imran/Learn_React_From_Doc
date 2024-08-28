// practice passing event handler as props.

import PropTypes from "prop-types"; // up to the file


function Button({onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({movieName}) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return (
    <Button onClick={handlePlayClick}>
      play {movieName}
    </Button>
  )
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Upload Image.
    </Button>
  )
}





function ToolBar() {
  return (
    <div>
      <PlayButton movieName="kalki" />
      <UploadButton />
    </div>
  )
}

export default ToolBar



Button.propTypes = {
  // this code will be down to the file
  children: PropTypes.string,
  onClick: PropTypes.func,
  movieName: PropTypes.string,
};

PlayButton.propTypes = {
  // this code will be down to the file
  movieName: PropTypes.string,
};