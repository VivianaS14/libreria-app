import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import userDefault from "../components/Login/img/user.svg";
import Alert from "../components/Alert";

export const AppContext = createContext();
export const DispatchAppContext = createContext();

const Context = (props) => {
  const [modal, setModal] = useState(false);
  const [picture, setPicture] = useState(null);
  const [user, setUser] = useState([]);
  const [dataUser, setDataUser] = useState();
  const [statusLogin, setStautsLogin] = useState(null);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});

  const editUser = ({ ...props }) => {
    const userId = props.id;
    const userRef = doc(db, "users", userId);

    updateDoc(userRef, {
      fullName: props.fullName,
      phone: props.phone,
      address: props.address,
      city: props.city,
      picture: picture ? picture : props.photo,
    })
      .then(() => {
        setAlert({
          type: "success",
          message: "Usuario actualizado correctamente",
        });
      })
      .catch((error) => {
        setAlert({ type: "error", message: error.message });
      });
  };

  const getUser = () => {
    if (statusLogin !== null) {
      const rest = dataUser?.find((user) => user.email === statusLogin.email);
      rest ? (setData(rest), setLoading(false)) : setLoading(true);
      if (!rest) {
        !rest ? (setData(statusLogin), setLoading(false)) : setLoading(true);
      }
    }
  };

  const loginStatus = async () => {
    try {
      await new Promise(() => {
        auth.onAuthStateChanged((log) => {
          setStautsLogin(log);
        });
      });
    } catch (error) {
      setAlert({ type: "error", message: error.message });
    }
  };

  const getData = () => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setDataUser(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  };

  useEffect(() => {
    loginStatus(), getData();
  }, []);

  const createUser = () => {
    const avatar = picture ? picture : userDefault;
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((result) => {
        addDoc(collection(db, "users"), {
          fullName: user.fullName,
          address: user.address,
          email: user.email,
          city: user.city,
          phone: user.phone,
          picture: avatar,
        });
        setAlert({
          type: "success",
          message: "Cuenta creada correctamente",
        });
      })
      .catch((err) => setAlert({ type: "error", message: err.message }));
  };

  const loginUser = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => setAlert({ type: "success", message: "Sesión iniciada" }))
      .catch((err) =>
        setAlert({
          type: "error",
          message: err.message,
        })
      );
    getUser();
    setModal(false);
  };

  const loginGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        setAlert({ type: "success", message: "Sesión iniciada" });
      })
      .catch((err) => {
        setAlert({
          type: "error",
          message: err.message,
        });
      });
  };

  const estado = {
    modal,
    picture,
    user,
    dataUser,
    statusLogin,
    data,
    loading,
    alert,
  };
  const dispatcher = {
    setModal,
    setPicture,
    setUser,
    createUser,
    loginUser,
    getUser,
    setLoading,
    setAlert,
    loginGoogle,
    editUser,
  };

  return (
    <>
      {alert.type && (
        <Alert setAlert={setAlert} type={alert.type} children={alert.message} />
      )}
      <AppContext.Provider value={estado}>
        <DispatchAppContext.Provider value={dispatcher}>
          {props.children}
        </DispatchAppContext.Provider>
      </AppContext.Provider>
    </>
  );
};

export default Context;
