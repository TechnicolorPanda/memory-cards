import React from 'react';
import '../styles/displayPictures.css';

const DisplayPictures = (props) => {

  const { 
    imageArray,
    pickImage,
  } = props;


  
  return (

    <div class = 'content'>
      <div className = 'row'>
        {props.pickImage.map((number, index) =>( 
        <div className = 'column'>
          <img src = {imageArray[number]}></img>
        </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayPictures;