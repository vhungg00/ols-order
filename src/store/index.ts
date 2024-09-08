/**
 * Create the store with dynamic reducers
 */

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createReducer } from 'store/reducers'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = createReducer()

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== 'production',
})
