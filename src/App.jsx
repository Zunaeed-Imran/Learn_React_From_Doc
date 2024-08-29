import { useState } from 'react';
import Renderlist2 from '../basic_practice/2_condational_rendering/Renderlist2';
import MyApp from '../basic_practice/6_sharing_data_components/MyApp';



import './App.css'

import Practice2 from '../basic_practice/8_passing_event_handler_as_props/Practice2';
import TodoApp from '../basic_practice/9_todo_app/TodoApp';



function App() {

    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
    }

  return (
    <>
      <h1>Welcome to My App</h1>

      <Renderlist2 />
 

      <MyApp count={count} onClick={handleClick} />
      <MyApp count={count} onClick={handleClick} />

      <Practice2 />

      <TodoApp />

    </>
  );
}

export default App
