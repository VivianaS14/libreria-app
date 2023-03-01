import {
  EmailRounded,
  Facebook,
  Instagram,
  PhoneRounded,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="w-50 Footer__content">
        <div className="content__frase">
          <p>Un oasis de conocimiento en la ciudad.</p>
        </div>
        <div className="content__redes">
          <p>@tripleaaa</p>
          <Facebook sx={{ fontSize: 30, padding: 1 }} />
          <Instagram sx={{ fontSize: 30, padding: 1 }} />
          <Twitter sx={{ fontSize: 30, padding: 1 }} />
        </div>
      </div>
      <div className="w-25 Footer__content">
        <div className="content__contacto">
          <EmailRounded sx={{ fontSize: 30, padding: 1 }} />
          <div className="">
            <p>Correo ELectronico:</p>
            <p>hello@tripleaaa.com</p>
          </div>
        </div>
        <div className="content__contacto">
          <PhoneRounded sx={{ fontSize: 30, padding: 1 }} />
          <div className="">
            <p>Telefono:</p>
            <p>(305) 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
