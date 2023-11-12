'use client'

import { createSlice } from "@reduxjs/toolkit"

interface collabWelcomeProps {
  data: {
    type: number,
    enterpriseId: string,
    enterpriseName: string,
    message: string
  }
}

const initialState: collabWelcomeProps = {
  data: {
    type: 0,
    enterpriseId: '',
    enterpriseName: '',
    message: ''
  }
}

const collabWelcomeReducer = createSlice({
  name: 'collabWelcome',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.data.type = action.payload
    },
    setEnterpriseId: (state, action) => {
      state.data.enterpriseId = action.payload
    },
    setEnterpriseName: (state, action) => {
      state.data.enterpriseName = action.payload
    },
    setMessage: (state, action) => {
      state.data.message = action.payload
    },
    readInfoCollab: (state, action) => {
      state.data = action.payload
    }
  }
})

export const {
  setType,
  setEnterpriseId,
  setEnterpriseName,
  setMessage,
  readInfoCollab
} = collabWelcomeReducer.actions

export default collabWelcomeReducer.reducer