import React from 'react';
// import '../styles/DisplayPictures.css';

const DisplayPictures = (props) => {

  const { 
    imageArray
  } = props;


  
  return (

    <div>
       <img src = {imageArray[0]}></img>
       <img src = {imageArray[3]}></img>
      </div>
  );
}

export default DisplayPictures;