import { createSlice } from "@reduxjs/toolkit"

const PickupSllice = createSlice({
    name: "Pickup",
    initialState: {
        formData: [],
        status: {
            modalStatus: false,
            iconStatus: false,
            checkBoxStatus: false,
            modalCheckBoxStatus: false,
            modalCheckerStatus: false,
        },
        place: [

        ]
    },
    reducers: {
        toogleModal: (state) => {
            state.status["modalStatus"] = !state.status.modalStatus
        },
        changeIconStatus: (state) => {
            state.status["iconStatus"] = true
        },
        changeCheckBoxStatus: (state) => {
            state.status["checkBoxStatus"] = !state.status.checkBoxStatus
        },
        changeModalCheckBoxStatus: (state, action) => {
            state.status["modalCheckBoxStatus"] = action.payload
        },
        changeModalCheckerStatus: (state, action) => {
            state.status["modalCheckerStatus"] = action.payload
        },
        addPickupPlace: (state, action) => {
            state.place.push(action.payload)
        },
        removePickupPlace: (state, action) => {
            state.place.splice(action.payload, 1)
        }
    }
})
export const {
    toogleModal,
    addPickupPlace,
    removePickupPlace,
    changeIconStatus,
    changeCheckBoxStatus,
    changeModalCheckBoxStatus,
    changeModalCheckerStatus } = PickupSllice.actions
export default PickupSllice.reducer