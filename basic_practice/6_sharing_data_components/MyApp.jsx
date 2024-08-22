//  this file will be using for (props) pass useState.

import { useState } from "react";




function MyApp() {


  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }



  return (
    <div>
      
    </div>
  )
}

export default MyApp

