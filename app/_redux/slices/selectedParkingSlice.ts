'use client'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: '',
  alias: '',
}

const selectedParkingReducer = createSlice({
  name: 'selectedParking',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload
    },
    setAlias: (state, action) => {
      state.alias = action.payload
    },
    readInfo: (state, action) => {
      state = action.payload
    },
    setAll: (state, action) => {
      state = action.payload
    }
  }
})

export const {
  setId,
  setAlias,
  readInfo,
  setAll
} = selectedParkingReducer.actions

export default selectedParkingReducer.reducer