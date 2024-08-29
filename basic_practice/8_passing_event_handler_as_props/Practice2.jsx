import PropTypes from "prop-types";


function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing  ${movieName}`);
  }
  return <Button onClick={handleClick}>play {movieName}</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert('Uploading!')}>Uoload image</Button>;
}

function Practice2() {
  return (
    <div>
      <PlayButton movieName={'kali-2'} />
      <UploadButton />
    </div>
  );
}

export default Practice2;

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string,
};

PlayButton.propTypes = {
  movieName: PropTypes.string,
};
