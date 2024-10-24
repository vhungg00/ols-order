import { store } from 'store'

// Infer the `RootState` and `AppDispatch` types from the store itself
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
