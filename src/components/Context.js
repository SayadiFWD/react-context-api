import React,{createContext, useState} from 'react'



 export const ProductCart = createContext()

const Context = ({children}) => {

    const [ item,setItem] = useState([])
  return (
    <ProductCart.Provider value={{item,setItem}}>{children}</ProductCart.Provider>
  )
}

export default Context;