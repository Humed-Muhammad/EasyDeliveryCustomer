import { createSlice } from "@reduxjs/toolkit"

const PickupSllice = createSlice({
    name: "Pickup",
    initialState: {
        formData: [],
        status: {
            pickupModalStatus: false,
            pickUpIconStatus: false,
            pickupCheckBoxStatus: false,
            pickupModalCheckBoxStatus: false,
            pickupModalCheckerStatus: false,
        },
        pickupPlace: [

        ]
    },
    reducers: {
        pickupToogleModal: (state) => {
            state.status["pickupModalStatus"] = !state.status.pickupModalStatus
        },
        pickupChangeIconStatus: (state) => {
            state.status["pickUpIconStatus"] = true
        },
        pickupChangeCheckBoxStatus: (state) => {
            state.status["pickupCheckBoxStatus"] = !state.status.pickupCheckBoxStatus
        },
        pickupChangeModalCheckBoxStatus: (state, action) => {
            state.status["pickupModalCheckBoxStatus"] = action.payload
        },
        pickupChangeModalCheckerStatus: (state, action) => {
            state.status["pickupModalCheckerStatus"] = action.payload
        },
        pickupAddPickupPlace: (state, action) => {
            state.pickupPlace.push(action.payload)
        },
        pickupRemovePickupPlace: (state, action) => {
            state.pickupPlace.splice(action.payload, 1)
        }
    }
})
export const {
    pickupToogleModal,
    pickupAddPickupPlace,
    pickupChangeCheckBoxStatus,
    pickupChangeIconStatus,
    pickupChangeModalCheckBoxStatus,
    pickupChangeModalCheckerStatus,
    pickupRemovePickupPlace
} = PickupSllice.actions
export default PickupSllice.reducer