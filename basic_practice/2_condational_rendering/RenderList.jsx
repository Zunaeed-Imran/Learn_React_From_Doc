// i will practice render list in this file.





// first we take data in array
const product = [
  {title: 'imran', id: 1},
  {title: 'dolon', id: 2},
  {title: 'akash', id: 3}
]


//  than we use map function.
function RenderList() {
  const itemlist = product.map(product => 
    <li key={product.id}>
      {product.title}
  </li>
)



  return (
    <div>
      <ul>{itemlist}</ul>
    </div>
  )
}

export default RenderList
