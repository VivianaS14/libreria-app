import React, { useState, useEffect } from 'react';
import cryingBook from './cryingBook.png';
import './NotFound.scss';

const NotFound = () => {
  const [bookAnimation, setBookAnimation] = useState(0);
  const [messageAnimation, setMessageAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBookAnimation((prev) => prev === 2 ? 0 : prev + 1);
    }, 2000);

    setTimeout(() => {
      setMessageAnimation(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="not-found-container">
      <img className={`crying-book book-${bookAnimation}`} src={cryingBook} alt="Book crying" />
      <h2 className={`not-found-message ${messageAnimation ? 'show-message' : ''}`}>¡Ups! La ruta que buscas no se ha encontrado.</h2>
    </div>
  );
};

export default NotFound;
