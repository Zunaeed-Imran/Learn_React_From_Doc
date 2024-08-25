
import { useState } from 'react';
import Renderlist2 from '../basic_practice/2_condational_rendering/Renderlist2';




import './App.css'


function App() {

  const [count, setCount] = useState(2);

  function MyButton() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to My App</h1>

      <Renderlist2 />
 

    </>
  );
}

export default App
