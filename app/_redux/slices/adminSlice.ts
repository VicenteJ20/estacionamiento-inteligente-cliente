'use client'

import { createSlice } from '@reduxjs/toolkit'

interface adminWelcomeProps {
  data: {
    type: number,
    commercialName: string,
    rut: string,
    alias: string,
    address: string,
    manager: string
  }
}

const initialState: adminWelcomeProps = {
  data: {
    type: 0,
    commercialName: '',
    rut: '',
    alias: '',
    address: '',
    manager: ''
  }
}

const adminWelcomeReducer = createSlice({
  name: 'adminWelcome',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.data.type = action.payload
    },
    setCommercialName: (state, action) => {
      state.data.commercialName = action.payload
    },
    setRut: (state, action) => {
      state.data.rut = action.payload
    },
    setAlias: (state, action) => {
      state.data.alias = action.payload
    },
    setAddress: (state, action) => {
      state.data.address = action.payload
    },
    setManager: (state, action) => {
      state.data.manager = action.payload
    },
    readInfoAdmin: (state, action) => {
      state.data = action.payload
    }
  }
})

export const {
  setType,
  setCommercialName,
  setRut,
  setAlias,
  setAddress,
  setManager,
  readInfoAdmin
} = adminWelcomeReducer.actions

export default adminWelcomeReducer.reducer