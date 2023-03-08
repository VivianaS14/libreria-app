import React from "react";
import "./UploadPhoto.scss";

function UploadPhoto({ ...props }) {
  return (
    <div className="file-select">
      <input type="file" accept="image/png, image/jpeg" {...props} />
    </div>
  );
}

export default UploadPhoto;
