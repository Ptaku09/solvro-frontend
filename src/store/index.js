import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from 'store/api/articles';

export * from './api/articles';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(articlesApi.middleware);
  },
});
