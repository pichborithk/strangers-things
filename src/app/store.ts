import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import tokenReducer from './tokenSlice';
import postsReducer from './postsSlice';

const store = configureStore({
  reducer: {
    tokenReducer: tokenReducer,
    postsReducer: postsReducer,
  },
});

export default store;

/* ------------------------- Create Custom Hook To Work With TypeScript ------------------------- */
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
