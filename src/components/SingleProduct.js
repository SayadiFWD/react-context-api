import React, { includes, useContext } from 'react'
import { ProductCart } from './Context'

const SingleProduct = ({ prod }) => {
  const { item, setItem } = useContext(ProductCart)
  return (
    <div className="productContainer">
      <span>{prod.name}</span>
      <span>{prod.price}</span>

      {item.includes(prod) ? (
        <button onClick={() => setItem(item.filter((c) => c.id !== prod.id))}>
          Remove
        </button>
      ) : (
        <button onClick={() => setItem([...item, prod])}>Add to cart</button>
      )}
    </div>
  )
}

export default SingleProduct
