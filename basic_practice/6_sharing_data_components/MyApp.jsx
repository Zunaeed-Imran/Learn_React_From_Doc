



export default function MyApp({count, onClick}) {

  return (

    <div>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  )
}

