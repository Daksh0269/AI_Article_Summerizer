import { configureStore } from '@reduxjs/toolkit'
import { aiApi } from './aiApi'

export const store = configureStore({
  reducer: {
    [aiApi.reducerPath]: aiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aiApi.middleware)
})