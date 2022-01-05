import { configureStore } from '@reduxjs/toolkit';
import { menuSlice } from './api/menu';

export * from './api/menu';

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});
