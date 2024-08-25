import PropsTypes from 'prop-types';



export default function MyApp({count, onClick}) {

  return (

    <div>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  )
}


MyApp.propsTypes = {
  count:PropsTypes.number,
  onClick:PropsTypes.func,
};