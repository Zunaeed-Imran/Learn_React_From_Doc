//  i will practice respond event in react, without any parenthesis.
// do not need to call the event handler function.



function MyButton() {

  function click() {
    alert('you clicked me');
  }

  return (
    <div>
      <button onClick={click}>
        push
      </button>
    </div>
  )
}

export default MyButton
