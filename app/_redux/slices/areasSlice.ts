'use client'

import { createSlice } from '@reduxjs/toolkit'


interface AreaArray {
  areas: Array<[]>
}

const initialState: AreaArray = {
  areas: []
}

const AreasSlice = createSlice({
  name: 'areasReducer',
  initialState,
  reducers: {
    readAreas: (state, action) => {
      state.areas = action.payload
    },
    addSingleArea: (state, action) => {
      state.areas.push(action.payload)
    },
    addManyAreas: (state, action) => {
      state.areas = action.payload
    },
    updateArea: (state, action) => {
      const index = state.areas.findIndex((item: any) => 
      item.id === action.payload.id)
      state.areas[index] = action.payload
    },
    deleteArea: (state, action) => {
      const index = state.areas.findIndex((item: any) => 
      item.id === action.payload.id)
      state.areas.splice(index, 1)
    }
  }
})

export const { readAreas, addSingleArea, addManyAreas, updateArea, deleteArea } = AreasSlice.actions

export default AreasSlice.reducer