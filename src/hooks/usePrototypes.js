
import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';
const usePrototypes = () => {
  const {items} = useContext(AppStateContext)
  return items
}

export default usePrototypes