import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import houseReducer from '../features/houses/houseSlice';
import dailyHouseReducer from '../features/dailyHouse/dailyHouseSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedHouseReducer = persistReducer(persistConfig, houseReducer);
const persistedDailyHouseReducer = persistReducer(
  persistConfig,
  dailyHouseReducer
);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    house: persistedHouseReducer,
    dailyHouse: persistedDailyHouseReducer,
  },

  middleware: [thunk],
});

export const persistor = persistStore(store);
