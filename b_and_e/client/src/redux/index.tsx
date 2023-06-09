import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

export default persistReducer(persistConfig, rootReducer);