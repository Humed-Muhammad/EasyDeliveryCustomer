import { createSlice } from "@reduxjs/toolkit"

const PickupSllice = createSlice({
    name: "Pickup",
    initialState: {
        formData: [],
        modalStatus: {
            status: false
        },
    },
    reducers: {
        toogleModal: (state) => {
            const newStatus = { ...state.modalStatus }
            newStatus["status"] = !newStatus.status
            state.modalStatus = newStatus
        }
    }
})
export const { toogleModal } = PickupSllice.actions
export default PickupSllice.reducer