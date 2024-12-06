import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';
import filterReducer from '../redux/filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer, 
    filter: filterReducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };
