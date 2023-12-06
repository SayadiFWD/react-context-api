import React,{useContext,useEffect, useState} from 'react'
import { ProductCart } from './Context'
import SingleProduct from './SingleProduct'





const Cart = () => {


    const {item,setItem}= useContext(ProductCart)
    const [total,setTotal]= useState(0)

useEffect(()=>{

setTotal(item.reduce((acc,curr)=>Number(curr.price),0))


},[item])


  return (
    <div>
        <span>{total}</span>
{item.map((prod)=>(
    <SingleProduct prod={prod} />
))}


    </div>
  )
}

export default Cart