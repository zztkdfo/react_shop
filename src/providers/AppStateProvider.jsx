import AppStateContext from './../contexts/AppStateContext'
import {useState, useCallback} from 'react'
import { DataList } from '../mock/DataList';
const AppStateProvider = ({children}) =>{
  const [orders, setOrders] = useState([])
  const items = DataList
  const addToOrder = useCallback((id) => {}, [])
  const remove = useCallback((id) => {}, [])
  const removeAll = () => {}
console.log('items',items)
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