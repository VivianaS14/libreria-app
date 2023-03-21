import React, { useContext, useEffect, useState } from "react";
import { addOneBook } from "../../../redux/reducer/bookSlices.js";
import { useDispatch } from "react-redux";
import { DispatchAppContext } from "../../../context/Context.jsx";
import { getBooks } from "../../../redux/actions/action.books.js";

export const useFormBook = (form, statusLogin, data) => {
  const [numberPhone, setNumberPhone] = useState("");

  useEffect(() => {
    setNumberPhone(data?.phone ? data.phone : "");
  }, [data]);

  const handlerPhone = (e) => {
    setNumberPhone(e.target.value);
  };

  const { setAlert } = useContext(DispatchAppContext);

  const dispatch = useDispatch();
  const [radio, setRadio] = React.useState("");

  const handleChangeRadioButtons = (event) => {
    setRadio(event.target.value);
  };
  const [errors, setErrors] = React.useState({});
  const [genres, setGenres] = useState("");
  const handleChange = (e) => {
    setGenres(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const errors = {};
    console.log(genres);

    if (!formData.get("title").trim()) {
      errors.title = "Debes ingresar el nombre del libro";
    }
    if (!formData.get("image").trim()) {
      errors.image = "Debes ingresar una imagen";
    }
    if (!formData.get("author").trim()) {
      errors.author = "Debes ingresar el autor del libro";
    }
    if (!formData.get("datePublish").trim()) {
      errors.datePublish = "Debes ingresar la fecha de publicación";
    }
    if (!formData.get("description").trim()) {
      errors.description = "Debes ingresar una descripción";
    }
    if (genres.length === 0) {
      errors.genres = "Debes seleccionar un género";
    }
    if (Object.keys(errors).length === 0) {
      const book = {
        title: formData.get("title"),
        image: formData.get("image"),
        author: formData.get("author"),
        datePublish: formData.get("datePublish"),
        description: formData.get("description"),
        phone: formData.get("phone"),
        genres: genres,
        idioma: radio,
        score: 0,
        userId: statusLogin.uid,
      };
      dispatch(addOneBook(book));
      setGenres("");
      form.current.reset();
      setAlert({ type: "info", message: "Libro registrado" });
      dispatch(getBooks());
    } else {
      setErrors(errors);
    }
  };
  return {
    handleChange,
    handleSubmit,
    handleChangeRadioButtons,
    handlerPhone,
    numberPhone,
    errors,
  };
};
