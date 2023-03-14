import { addService } from "../../services/addDataFirestore/addServices";
import { getAllService } from "../../services/getDataFiretore/getAllService";
import { deleteService } from "../../services/deleteDataFirestore/deleteService";
import { getServices } from "../reducer/serviceSlices";

export const addServiceOfUser = (state, action) => {
  addService(action.payload);
};
export const getServicesUser = () => {
  return async function (dispatch) {
    const getDataBooks = await getAllService();
    dispatch(getServices({ allServices: getDataBooks }));
  };
};
export const getServiceData = (state, action) => {
  state.allServices = action.payload.allServices;
};
export const deleteServices = (state, action) => {
  deleteService(action.payload);
};
