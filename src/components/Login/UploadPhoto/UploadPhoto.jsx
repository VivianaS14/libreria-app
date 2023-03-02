import React from "react";
import './UploadPhoto.scss'

function UploadPhoto({ ...props }) {
  return (
    <div className="file-select">
      

      <input type="file" {...props} />
     
    </div>
  );
}

export default UploadPhoto;
