import React from 'react';
import InputForm from "../Login/InputForm/InputForm.jsx";
import './FormRegisterService.scss';
import {Button} from "@mui/material";
const FormRegisterService = () => {
    return (
        <form className="register-form-service">
            <div className="input-group-sm-service">
                <>
                    <InputForm placeholder="Tipo de servicio"/>
                </>
                <>
                    <textarea placeholder="Descripcion del servicio"/>
                </>
            </div>
            <Button variant="contained">Registrar servicio</Button>
        </form>
    );
};

export default FormRegisterService;