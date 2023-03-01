import React, { useContext, useState } from "react";
import Webcam from "react-webcam";
import { AppContext, DispatchAppContext } from "../../../context/Context";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};
const PhotoUser = () => {
  const [photo, setPhoto] = useState(false);

  const { picture } = useContext(AppContext);
  const { setPicture } = useContext(DispatchAppContext);

  const webcamRef = React.useRef(null);

  const capture = () => {
    const pictureSrc = webcamRef.current.getScreenshot();
    setPicture(pictureSrc);
  };

  return (
    <>
     {!photo?
     <button onClick={()=> setPhoto(true)}>Tomar foto</button>
     :
     <div>
     <div>
       {picture == "" ? (
         <Webcam
           audio={false}
           height={400}
           ref={webcamRef}
           width={400}
           screenshotFormat="image/jpeg"
           videoConstraints={videoConstraints}
         />
       ) : (
         <img src={picture} />
       )}
     </div>
     <div>
       {picture != "" ? (
         <button
           onClick={(e) => {
             e.preventDefault();
             setPicture("");
           }}
           className="btn btn-primary"
         >
           Retake
         </button>
       ) : (
         <button
           onClick={(e) => {
             e.preventDefault();
             capture();
           }}
           className="btn btn-danger"
         >
           Capture
         </button>
       )}
     </div>
   </div>

     }
    </>
  );
};
export default PhotoUser;
