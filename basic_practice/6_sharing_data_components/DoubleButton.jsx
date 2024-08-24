//  in this file we practice sharing data components using state.

import { useState } from "react"
import MyApp from "./MyApp"






function DoubleButton({count, onClick}) {

  const [count, setCount] = useState(0); 

  function handleClick() {
    setCount(count + 1);
  }


  return (
    <div>
      <h3>Count the update together. </h3>
      <MyApp count={count} onClick={handleClick} />
      <MyApp count={count} onClick={handleClick} />
    </div>
  )
}

export default DoubleButton
