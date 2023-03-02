import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";

export const AppContext = createContext();
export const DispatchAppContext = createContext();

const Context = (props) => {
  const [modal, setModal] = useState(false);
  const [picture, setPicture] = useState(null);
  const [user, setUser] = useState([]); //temporal mientras se crea la base de datos
  const [dataUser, setDataUser] = useState();
  const [statusLogin, setStautsLogin] = useState(null);
  console.log(user, picture);

  const loginStatus = async () => {
    try {
      await new Promise(() => {
        auth.onAuthStateChanged((log) => {
          setStautsLogin(log);
        });
      });
    } catch (error) {
      console.log(error);
    }
    return statusLogin;
  };

  const data = () => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setDataUser(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  useEffect(() => {
    loginStatus(), data();
  }, []);

  const createUser = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((result) => {
        console.log(result);
          addDoc(collection(db, "users"), {
            fullName: user.fullName,
            address: user.address,
            email: user.email,
            city: user.city,
            phone: user.phone,
            picture: picture,
          });
      })
      .catch((err) => alert(err.message));
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => {
        console.log("success full login");
      })
      .catch((err) => alert(err.message));
  };

  const estado = { modal, picture, user, dataUser, statusLogin };
  const dispatcher = { setModal, setPicture, setUser, createUser, loginUser };

  return (
    <AppContext.Provider value={estado}>
      <DispatchAppContext.Provider value={dispatcher}>
        {props.children}
      </DispatchAppContext.Provider>
    </AppContext.Provider>
  );
};

export default Context;
