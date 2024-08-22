// in this file i will practice usestate, how updating screen. 

import { useState } from "react"




function MyButton() {

  const [count, setCount] = useState(0);

  function handleC() {
    setCount(count + 1);
  }


  return (
    <div>
      <button onClick={handleC}>
        clicked {count} times.
      </button>
    </div>
  )
}

export default MyButton
