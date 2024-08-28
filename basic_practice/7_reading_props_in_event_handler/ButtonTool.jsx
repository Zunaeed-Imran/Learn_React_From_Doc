// 2nd practice of reading props in event handler.
import PropTypes from "prop-types"; // up to the file



function AlBut({message, call}) {
  return (
    <div>
      <button onClick={() => alert(message)}>
        {call}
      </button>
    </div>
  );
}





function ButtonTool() {
  return (
    <div>
      <AlBut message={"2nd practice"}>
        C
      </AlBut>

      <AlBut message={"2nd practice 2"}>
        C
      </AlBut>
    </div>
  )
}

export default ButtonTool



AlBut.propTypes = {
  // this code will be down to the file
  message: PropTypes.string,
  call: PropTypes.string
};