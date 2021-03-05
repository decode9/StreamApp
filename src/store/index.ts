import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: []
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
