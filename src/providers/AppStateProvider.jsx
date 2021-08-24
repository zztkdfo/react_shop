import AppStateContext from './../contexts/AppStateContext'
import {useState, useCallback} from 'react'
import { DataList } from '../mock/DataList';
const AppStateProvider = ({children}) =>{
  const [orders, setOrders] = useState([])
  const items = DataList
  const addToOrder = useCallback((id) => {
    setOrders((orders) =>{
      const finded = orders.find((order) => order.id === id)

      if(finded === undefined){
        return [...orders, {id, quantity: 1}]
      } else {
        return orders.map((order) => {
          if(order.id === id){
            return {
              id, quantity: order.quantity+1
            }
          } else {
            return order
          }
        })  
      }
    })
  }, [])
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id)
    })
  }, [])
  const removeAll = () => {
    setOrders([])
  }
return <AppStateContext.Provider 
  value={{
    orders, 
    items,
    addToOrder,
    remove,
    removeAll
  }}>
    {children}
</AppStateContext.Provider>
}

export default AppStateProvider