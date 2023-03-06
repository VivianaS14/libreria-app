import React, {useContext} from 'react';
import {categories} from '../AllBooks/utils/allCategories';
import './FormRegisterBook.scss';
import {AppContext} from "../../context/Context.jsx";
import {useFormBook} from './hooks/useFormBook';
import InputForm from "../Login/InputForm/InputForm.jsx";
import {Button} from "@mui/material";
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
                    {errors.title && <span>{errors.title}</span>}
                    <InputForm placeholder="imagen del libro" name='image'/>
                    {errors.image && <span>{errors.image}</span>}
                    <InputForm placeholder="ingrese el autor del libro" name='author'/>
                    {errors.author && <span>{errors.author}</span>}
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
                        {errors.genres && <span>{errors.genres}</span>}
                    </div>
                </div>
                <div className="date-description">
                    <InputForm
                        type="date"
                        placeholder="Fecha de publicacion"
                        name="datePublish"
                    />
                    {errors.datePublish && <span>{errors.datePublish}</span>}
                    <textarea
                        className="description"
                        placeholder="descripcion"
                        name="description"
                    />
                    {errors.description && <span>{errors.description}</span>}
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