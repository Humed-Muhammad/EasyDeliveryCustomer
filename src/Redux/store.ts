import { configureStore } from "@reduxjs/toolkit"
import color from "@Redux/Slices/ColorSlice"
import report from "@Redux/Slices/ReportSlice"
import pickup from "@Redux/Slices/PickUpSlice"

export default configureStore({
    reducer: {
        color,
        report,
        pickup
    }
})