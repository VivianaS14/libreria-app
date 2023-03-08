import React from 'react';
import cryingBook from './cryingBook.png';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img className="crying-book" src={cryingBook} alt="Book crying" />
      <h2 className="not-found-message">¡Ups! La ruta que buscas no se ha encontrado.</h2>
    </div>
  );
};

export default NotFound;
