'use client'

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: '',
  name: '',
  
}

const SelectedAreaSlice = createSlice({
  name: 'selectedArea',
  initialState,
  reducers: {
    readSelectedArea: (state, action) => {
      state = action.payload
    },
    setId: (state, action) => {
      state.id = action.payload
    },
    setName: (state, action) => {
      state.name = action.payload
    },
    setAll: (state, action) => {
      state = action.payload
    }
  }
})

export const {
  readSelectedArea,
  setId,
  setName,
  setAll
} = SelectedAreaSlice.actions

export default SelectedAreaSlice.reducer