import React from "react";
import {addOneBook} from "../../../redux/reducer/bookSlices.js";
import {useDispatch} from "react-redux";
import alert from "../../Alert.jsx";

const initialFormBook = {
    title: '',
    image: '',
    author: '',
    datePublish: '',
    description: '',
    genres: [],
    score: 0,
    userId: ''
}

export const useFormBook = (form, statusLogin, validation) => {

    const dispatch = useDispatch();
    const [errors, setErrors] = React.useState({});
    let genres = []
    const handleChange = (e) => {
        genres = [...genres, e.target.value]

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const errors = {}
        if (!formData.get('title').trim()){
            errors.title = 'Debes ingresar el nombre del libro'
        }
        if (!formData.get('image').trim()){
            errors.image = 'Debes ingresar una imagen'
        }
        if (!formData.get('author').trim()){
            errors.author = 'Debes ingresar la fecha de publicacion'
        }
        if (!formData.get('datePublish').trim()){
            errors.datePublish = 'Debes ingresar la fecha de publicacion'
        }
        if (!formData.get('description').trim()){
            errors.description = 'Debes ingresar una descripcion'
        }
        if (genres.length === 0){
            errors.genres = 'Debes ingresar minimo un genero'
        }
        if (Object.keys(errors).length === 0){
            const book = {
                title: formData.get('title'),
                image: formData.get('image'),
                author: formData.get('author'),
                datePublish: formData.get('datePublish'),
                description: formData.get('description'),
                genres: genres,
                score: 0,
                userId: statusLogin.uid
            }
            console.log('Formulario enviado ' + book )
        }else {
            setErrors(errors)
        }

        //dispatch(addOneBook(book))
        // genres = []
        // form.current.reset()
    }
    return {
        handleChange,
        handleSubmit,
        errors
    }
}