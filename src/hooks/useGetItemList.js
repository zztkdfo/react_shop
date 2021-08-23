
import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';
const useGetItemList = () => {
  const {items} = useContext(AppStateContext)
  return items
}

export default useGetItemList