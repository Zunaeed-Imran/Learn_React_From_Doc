import React from 'react'


function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function PlayButton({ movieName }) {
  function handleClick() {
    alert(`Playing  ${movieName}`);
  }
  return (
    <Button onClick={handleClick}>
      play {movieName}
    </Button>
  )
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Uploading!')}>
      Uoload image
    </Button>
  )
}



function Practice1() {

  return (
    <div>
      <PlayButton movieName={'kali-2'} />
      <UploadButton />
    </div>
  )
}

export default Practice1
