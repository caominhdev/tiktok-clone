import { useContext, useReducer } from 'react'
import { StoreContext } from '.'
import Context from './Context'

export const useStore = () => {
    const [state, dispatch] = useContext(StoreContext)
    return [state, dispatch]
}

