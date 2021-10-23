import { createSlice } from "@reduxjs/toolkit"

const PickupSllice = createSlice({
    name: "Pickup",
    initialState: {
        formData: [],
        modalStatus: {
            status: false
        },
        place: ["Current Location", "Bole, Edna mall"]
    },
    reducers: {
        toogleModal: (state) => {
            const newStatus = { ...state.modalStatus }
            newStatus["status"] = !newStatus.status
            state.modalStatus = newStatus
        },
        addPickupPlace: (state, action) => {
            state.place.push(action.payload)
        },
        removePickupPlace: (state, action) => {
            const newPlace = [...state.place]
            newPlace.splice(action.payload, 1)
            state.place = newPlace
        }
    }
})
export const { toogleModal, addPickupPlace, removePickupPlace } = PickupSllice.actions
export default PickupSllice.reducer