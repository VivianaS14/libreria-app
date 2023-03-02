import React from "react";

function UploadPhoto({ ...props }) {
  return (
    <div>
      <input type="file" {...props} />
    </div>
  );
}

export default UploadPhoto;
