'use client'

import { configureStore } from "@reduxjs/toolkit"
import adminWelcomeReducer from './slices/adminSlice'
import collabWelcomeReducer from './slices/collabSlice'
import availableRolesReducer from './slices/rolesSlice'
import areasReducer from './slices/areasSlice'
import selectedParkingReducer from './slices/selectedParkingSlice'

export const store = configureStore({
  reducer: {
    adminWelcome: adminWelcomeReducer,
    collabWelcome: collabWelcomeReducer,
    availableRoles: availableRolesReducer,
    areasReducer: areasReducer,
    parkingPlace: selectedParkingReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch