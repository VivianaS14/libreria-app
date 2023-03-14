import { createSlice } from "@reduxjs/toolkit";
import { addServiceOfUser, deleteServices } from "../actions/action.service.js";
import { getServiceData } from "../actions/action.service";

const initialState = {
  allServices: [],
};
const serviceSlices = createSlice({
  name: "services",
  initialState,
  reducers: {
    addServices: addServiceOfUser,
    getServices: getServiceData,
    deleteService: deleteServices,
  },
});
export const { addServices, getServices, deleteService } =
  serviceSlices.actions;
export { serviceSlices };
