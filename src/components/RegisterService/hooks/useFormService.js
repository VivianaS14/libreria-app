import React, {useContext} from "react";
import {addServices} from '../../../redux/reducer/serviceSlices';
import {useDispatch} from "react-redux";
import {AppContext} from "../../../context/Context.jsx";
import {getUserService} from "../../../services/getDataFiretore/getAllService.js";
export const useFormService =(initilaValue, validation) => {
    const {statusLogin} = useContext(AppContext);
    const [formService, setFormService] = React.useState(initilaValue)
    let user = {}
    const prueba = async () => {
        const userRegister = await getUserService(statusLogin);
        user.fullName = userRegister.fullName
        user.phone = userRegister.phone
    }
    const [errors, setErrors] = React.useState({})
    const dispatch = useDispatch();
    const handleChangue = (e) => {
        prueba()
        setFormService({
            ...formService,
            user,
            [e.target.name] : e.target.value
        })
        setErrors(validation(formService))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(validation(formService))
        if (Object.keys(errors).length === 0){
            dispatch(addServices(formService));
            setFormService({
                name_service: '',
                description: ''
            })
        }
    }
    return {
        formService,
        handleChangue,
        errors,
        handleSubmit
    }
}