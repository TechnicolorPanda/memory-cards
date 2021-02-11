import React from 'react';
// import '../styles/DisplayPictures.css';

const DisplayPictures = (props) => {

  const { 
    testImage
  } = props;
  
  return (

    <div>
       <img src = {testImage} alt = 'airplant'></img>
      </div>
  );
}

export default DisplayPictures;