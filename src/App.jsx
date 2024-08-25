
import { useState } from 'react';
import Renderlist2 from '../basic_practice/2_condational_rendering/Renderlist2';
import './App.css'
import MyApp from '../basic_practice/6_sharing_data_components/MyApp';



function App() {

  const [count, setCount] = useState(3);

  function handle() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Welcome to My App</h1>

      <Renderlist2 />
  
      <MyApp count={count} onClick={handle} />
      <MyApp count={count} onClick={handle} />
      <MyApp count={count} onClick={handle} />
    </>
  );
}

export default App
