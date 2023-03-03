import React, { useContext, useEffect } from "react";

const styles = {
  container: {
    position: "fixed",
    marginTop: "2%",
    padding: "1% 10%",
    top: 0,
    right: "5%",
    fontWeight: "bold",
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "bold",
    borderRadius: 12,
  },
  error: {
    backgroundColor: "rgba(255, 0, 0, 0.1)",
    color: "red",
  },
  success: {
    backgroundColor: "rgba(0, 128, 0, 0.1)",
    color: "green",
  },
  info: {
    backgroundColor: "rgba(0, 0, 255, 0.1)",
    color: "blue",
  },
};

const Alert = ({ setAlert, type, children, ...props }) => {
  useEffect(() => {
    setInterval(() => {
      setAlert({});
    }, 3000);
  }, []);

  const style = {
    ...styles.container,
    ...styles[type],
  };

  return (
    <h3 style={style} {...props}>
      {children}
    </h3>
  );
};

export default Alert;
