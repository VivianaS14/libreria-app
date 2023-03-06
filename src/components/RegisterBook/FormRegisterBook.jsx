import React, {useContext} from 'react';
import {categories} from '../AllBooks/utils/allCategories';
import './FormRegisterBook.scss';
import {AppContext} from "../../context/Context.jsx";
import {useFormBook} from './hooks/useFormBook';
import InputForm from "../Login/InputForm/InputForm.jsx";
import {Button, FormHelperText} from "@mui/material";
import {theme} from "../../theme/theme.js";
import {ThemeProvider} from "@mui/material/styles";

const FormRegisterBook = () => {

    const {statusLogin} = useContext(AppContext);
    const form = React.useRef(null);
    const {handleSubmit, handleChange, errors} = useFormBook(form, statusLogin);

    return (
        <React.Fragment>
            <form className="register-form-book" ref={form} >
                <div className="input-group-sm">
                    <InputForm placeholder="nombre del libro" name='title'/>
                    {errors.title && <div className="container-error">
                                        <span >{errors.title}</span>
                                    </div>
                    }
                    <InputForm placeholder="imagen del libro" name='image'/>
                    {errors.image && <FormHelperText sx={{color: "#FF0000"}}>
                        {errors.image}</FormHelperText>}
                    <InputForm placeholder="ingrese el autor del libro" name='author'/>
                    {errors.author && <FormHelperText sx={{color: "#FF0000"}}>
                        {errors.author}</FormHelperText>}
                    <div className="select-options">
                        <label>Ingrese el genero:</label>
                        <select onChange={handleChange} className="select-genres">
                            <option disabled>Generos</option>
                            {
                                categories.map(item => (
                                    <option key={item.id} value={item.name_category}>{item.name_category}</option>
                                ))
                            }
                        </select>
                        {errors.genres && <FormHelperText sx={{color: "#FF0000"}}>
                            {errors.genres}</FormHelperText>}
                    </div>
                </div>
                <div className="date-description">
                    <InputForm
                        type="date"
                        placeholder="Fecha de publicacion"
                        name="datePublish"
                    />
                    {errors.datePublish && <FormHelperText sx={{color: "#FF0000"}}>
                        {errors.datePublish}</FormHelperText>}
                    <textarea
                        className="description"
                        placeholder="descripcion"
                        name="description"
                    />
                    {errors.description && <FormHelperText sx={{color: "#FF0000"}}>
                        {errors.description}</FormHelperText>}
                </div>
                <ThemeProvider theme={theme}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                    >Enviar</Button>
                </ThemeProvider>
            </form>
        </React.Fragment>
    );
};
export default FormRegisterBook;