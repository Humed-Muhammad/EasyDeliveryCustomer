import { configureStore } from "@reduxjs/toolkit"
import color from "@Redux/Slices/ColorSlice"

export default configureStore({
    reducer: {
        color,
    }
})