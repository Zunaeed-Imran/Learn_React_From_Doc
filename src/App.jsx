
import { useState } from 'react';
import Renderlist2 from '../basic_practice/2_condational_rendering/Renderlist2';
import MyApp from '../basic_practice/6_sharing_data_components/MyApp';




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

      <MyApp count={count} onClick={MyButton} />      
      <MyApp count={count} onClick={MyButton} />      

    </>
  );
}

export default App
