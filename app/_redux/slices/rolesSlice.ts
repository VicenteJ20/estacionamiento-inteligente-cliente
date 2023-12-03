'use client'

import { createSlice } from "@reduxjs/toolkit"


const initialState: any = {
  roles: [],
}

const RolesSlice = createSlice({
  name: 'availableRoles',
  initialState,
  reducers: {
    readRoles: (state, action) => {
      state.roles = action.payload
    },
    addRole: (state, action) => {
      state.roles.push(action.payload)
    },
    addManyRoles: (state, action) => {
      state.roles = action.payload
    },
    updateRole: (state, action) => {
      const index = state.roles.findIndex((role: any) => role.id === action.payload.id)
      state.roles[index] = action.payload
    },
    deleteRole: (state, action) => {
      const index = state.roles.findIndex((role: any) => role.id === action.payload.id)
      state.roles.splice(index, 1)
    }
  }
})

export const { readRoles, addRole, addManyRoles, updateRole, deleteRole } = RolesSlice.actions
export default RolesSlice.reducer