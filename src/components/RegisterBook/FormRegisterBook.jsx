import React, {useContext} from 'react';
import {categories} from '../AllBooks/utils/allCategories';
import './FormRegisterBook.scss';
import {AppContext} from "../../context/Context.jsx";
import {useFormBook} from './hooks/useFormBook';
import InputForm from "../Login/InputForm/InputForm.jsx";
import {Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {theme} from "../../theme/theme.js";
import {ThemeProvider} from "@mui/material/styles";

const FormRegisterBook = () => {

    const {statusLogin} = useContext(AppContext);
    const form = React.useRef(null);
    const {handleSubmit,
        handleChange,
        errors,
        handleChangeRadioButtons} = useFormBook(form, statusLogin);

    return (
        <React.Fragment>
            <form className="register-form-book" ref={form} >
                <div className="input-group-sm">
                    <>
                        <InputForm placeholder="nombre del libro" name='title'/>
                        {errors.title && <div className="container-error">
                            <span >{errors.title}</span>
                        </div>
                        }
                    </>
                    <>
                        <InputForm placeholder="imagen del libro" name='image'/>
                        {errors.image && <div className="container-error">
                            <span>
                            {errors.image}</span>
                        </div>}
                    </>
                    <>
                        <InputForm placeholder="ingrese el autor del libro" name='author'/>
                        {errors.author && <div className="container-error">
                            <span>
                            {errors.author}</span>
                        </div>}
                    </>
                    <FormControl>
                        <FormLabel color="secondary">Elige el idioma</FormLabel>
                        <RadioGroup
                            sx={{display: 'flex', flexDirection: 'row'}}
                        >
                            <FormControlLabel
                                value="Ingles"
                                control={<Radio color="secondary" onChange={handleChangeRadioButtons}  />}
                                label="Ingles"
                            />
                            <FormControlLabel
                                value="Español"
                                control={<Radio color="secondary" onChange={handleChangeRadioButtons} />}
                                label="Español"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
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
                    {errors.genres && <div className="container-error">
                        <span>
                        {errors.genres}</span>
                    </div>}
                </div>
                <div className="date-description">
                    <div>
                        <InputForm
                            type="date"
                            placeholder="Fecha de publicacion"
                            name="datePublish"
                        />
                        {errors.datePublish && <div className="container-error">
                            <span>
                            {errors.datePublish}</span>
                        </div>}
                    </div>
                    <div>
                        <textarea
                            className="description"
                            placeholder="descripcion"
                            name="description"
                        />
                        {errors.description && <div className="container-error">
                            <span>
                            {errors.description}</span>
                        </div>}
                    </div>
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