import { createSlice } from "@reduxjs/toolkit"

const DropoffSlice = createSlice({
    name: "Dropoff",
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
        addDropoffPlace: (state, action) => {
            state.place.push(action.payload)
        },
        removeDropoffPlace: (state, action) => {
            const newPlace = [...state.place]
            newPlace.splice(action.payload, 1)
            state.place = newPlace
        }
    }
})
export const { toogleModal, addDropoffPlace, removeDropoffPlace, changeCheckBoxStatus, changeIconStatus, changeModalCheckBoxStatus, changeModalCheckerStatus } = DropoffSlice.actions
export default DropoffSlice.reducer