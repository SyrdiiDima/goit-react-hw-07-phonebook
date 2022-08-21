import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';
import { contactApi } from './contactApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['items'],
// };
// const persistedReduser = persistReducer(persistConfig, contactSlice.reducer);

// middleware(getDefaultMiddleware) {
//   return getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   });
// },

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    // contacts: persistedReduser,
    filter: contactSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
