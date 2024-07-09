import {
    configureStore
} from '@reduxjs/toolkit'

import { rootApi } from './features/apiSlice'
import CartReducer from './reducers/CartReducer'

const rootReducer ={
    cart:CartReducer,
    [rootApi.reducerPath] : rootApi.reducer
}

export const ourStore  = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(rootApi.middleware) 
})