import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/authSlice'
import { userDetailsApi } from './queryApi/queryApi'
import storage from 'redux-persist/lib/storage'
import { persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  blacklist:[userDetailsApi.reducerPath]

}

export const rootReducers = combineReducers({
  auth:authReducer,
  [userDetailsApi.reducerPath]:userDetailsApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(userDetailsApi.middleware),
})