import React, {useContext} from "react";
import {addServices} from '../../../redux/reducer/serviceSlices';
import {useDispatch} from "react-redux";
import {AppContext} from "../../../context/Context.jsx";
export const useFormService = (initilaValue, validation) => {
    const {statusLogin} = useContext(AppContext);
    const [formService, setFormService] = React.useState(initilaValue)
    const [errors, setErrors] = React.useState({})
    const dispatch = useDispatch();
    const handleChangue = (e) => {
        setFormService({
            ...formService,
            userId: statusLogin.uid,
            [e.target.name] : e.target.value
        })
        setErrors(validation(formService))
    }

    const handleSubmit = (e) => {
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