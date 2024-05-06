import {configureStore} from "@reduxjs/toolkit"
import themeReducer from '../features/themeSlice.jsx'
import authReducer from '../features/authSlice.jsx'

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        auth: authReducer,
    }

});