//  this is 2nd time practice.

const data = [
  {name: "ranas", age: 26, id: 1},
  {name: "imran", age: 35, id: 2},
  {name: "lamia", age: 30, id: 3}
];



function Renderlist2() {

  const lsitItem = data.map( data => 
    <li key={data.id}>
      {data.name + " "}
      {data.age}
    </li>
  );

  return (
    <div>
      {lsitItem}
    </div>
  )
}

export default Renderlist2
