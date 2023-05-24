import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./stores/auth.slice";
import packagesReducer from "./stores/packages.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    packages: packagesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

/**
 * Infer the `RootState` and `AppDispatch` types from the store itself
 */
export type RootState = ReturnType<typeof store.getState>;
/**
 * Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 */
export type AppDispatch = typeof store.dispatch;
