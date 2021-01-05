import {createStore, applyMiddleware, combineReducers} from 'redux';
import reducerSearch from './reducerSearch';
import reducerFav from './reducerFav';
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';



const reducers = combineReducers({ reducerSearch, reducerFav })

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['reducerFav']
}


const persistedReducer = persistReducer(persistConfig, reducers)


export const configureStore = () => {
  
  let myStore = createStore(persistedReducer, applyMiddleware(thunk));
  let mypersistor = persistStore(myStore);

  return {myStore, mypersistor };
};

