import React, { useState } from 'react'
import faker from 'faker'
import SingleProduct from './SingleProduct'

const Home = () => {
  const products = [...Array(10)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    image: faker.random.image(),
    price: faker.commerce.price(),
  }))

  const [product, setProduct] = useState(products)

  return (
    <div>
      {product.map((prod) => (
        <SingleProduct prod={prod} key={prod.id} />
      ))}
    </div>
  )
}

export default Home
