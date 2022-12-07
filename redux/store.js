import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import {createStore} from 'redux'

import todoReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}


const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
