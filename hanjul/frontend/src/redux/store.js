import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
//local storage 불러오기
import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';

//persist 설정
const persistConfig = {
  key: 'root',
  storage // localStorage
};
// persistedReducer 생성
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configStore() {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor }
}