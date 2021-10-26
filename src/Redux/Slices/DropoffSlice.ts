import { createSlice } from "@reduxjs/toolkit"

const DropoffSlice = createSlice({
    name: "Dropoff",
    initialState: {
        formData: [],
        status: {
            dropoffModalStatus: false,
            dropoffIconStatus: false,
            dropoffCheckBoxStatus: false,
            dropoffModalCheckBoxStatus: false,
            dropoffCheckerStatus: false,
            dropoffCheckBoxHandler: false
        },
        dropoffPlace: [

        ]
    },
    reducers: {
        dropoffToogleModal: (state) => {
            state.status["dropoffModalStatus"] = !state.status.dropoffModalStatus
        },
        dropoffChangeIconStatus: (state) => {
            state.status["dropoffIconStatus"] = true
        },
        dropoffChangeCheckBoxStatus: (state, action) => {
            state.status["dropoffCheckBoxStatus"] = action.payload
        },
        dropoffChangeModalCheckBoxStatus: (state) => {
            state.status["dropoffModalCheckBoxStatus"] = !state.status.dropoffModalCheckBoxStatus
        },
        dropoffChangeCheckerStatus: (state, action) => {
            state.status["dropoffCheckerStatus"] = action.payload
        },
        dropoffChangeCheckBoxHandler: (state, action) => {
            if (action.payload == true) {
                state.status["dropoffCheckBoxHandler"] = action.payload

            } else {
                state.status["dropoffCheckBoxHandler"] = !state.status.dropoffCheckBoxHandler
            }
        },
        addDropoffPlace: (state, action) => {
            state.dropoffPlace.push(action.payload)
        },
        removeDropoffPlace: (state, action) => {
            state.dropoffPlace.splice(action.payload, 1)
        }
    }
})
export const {
    dropoffToogleModal,
    addDropoffPlace,
    removeDropoffPlace,
    dropoffChangeCheckBoxStatus,
    dropoffChangeIconStatus,
    dropoffChangeModalCheckBoxStatus,
    dropoffChangeCheckerStatus,
    dropoffChangeCheckBoxHandler
} = DropoffSlice.actions
export default DropoffSlice.reducer