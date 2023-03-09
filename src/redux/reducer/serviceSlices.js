import {createSlice} from '@reduxjs/toolkit';
import {addServiceOfUser} from "../actions/action.service.js";
import {getServiceData} from '../actions/action.service';

const initialState = {
    allServices: []
}
const serviceSlices = createSlice({
    name: 'services',
    initialState,
    reducers: {
        addServices: addServiceOfUser,
        getServices: getServiceData

    }
})
export const {addServices, getServices} = serviceSlices.actions
export {serviceSlices}