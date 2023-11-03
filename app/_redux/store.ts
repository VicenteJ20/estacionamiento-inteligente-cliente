'use client'

import { configureStore } from "@reduxjs/toolkit"
import adminWelcomeReducer from './slices/adminSlice'
import collabWelcomeReducer from './slices/collabSlice'

export const store = configureStore({
  reducer: {
    adminWelcome: adminWelcomeReducer,
    collabWelcome: collabWelcomeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch