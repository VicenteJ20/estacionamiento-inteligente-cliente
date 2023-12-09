import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sensores: [] as any
}

const sensoresSlice = createSlice({
    name: 'vistaSensores',
    initialState,
    reducers: {
        setManySensors: (state, action) => {
            state.sensores = action.payload
        },
        setOneSensor: (state, action) => {
            state.sensores.push(action.payload)
        },
        deleteOneSensor: (state, action) => {
            state.sensores = state.sensores.filter((sensor: any) => sensor.id !== action.payload)
        },
        updateOneSensor: (state, action) => {
            state.sensores = state.sensores.map((sensor: any) => {
                if (sensor.id === action.payload.id) {
                    return action.payload
                }
                return sensor
            })
        }
    }
})

export const { setManySensors, setOneSensor, deleteOneSensor, updateOneSensor } = sensoresSlice.actions
export default sensoresSlice.reducer