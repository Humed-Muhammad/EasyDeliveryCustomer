import { createSlice } from "@reduxjs/toolkit";
import { State } from "react-native-gesture-handler";


const AccountSlice = createSlice({
    name: "Account",
    initialState: {
        loggedIn: {
            status: false
        }
    },
    reducers: {
        loggeIn: (state, action) => {
            const newStatus = { ...state.loggedIn }
            newStatus["status"] = action.payload
            state.loggedIn = newStatus
        }
    }
})


export const { loggeIn } = AccountSlice.actions

export default AccountSlice.reducer