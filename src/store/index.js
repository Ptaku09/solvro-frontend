import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from 'store/api/articles';
import { menuSlice } from './api/menu';

export * from './api/articles';
export * from './api/menu';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    menu: menuSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(articlesApi.middleware);
  },
});
