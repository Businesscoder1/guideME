
import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice'
import courseReducer from '../slices/courseSlice'
import profileReducer from '../slices/profileSlice'
import viewCourseReducer from '../slices/viewCourseSlice'
export const Store=configureStore({
  reducer:{
    auth:authReducer,
    profile:profileReducer,
    course:courseReducer,
    viewCourse:viewCourseReducer,
  },
})
