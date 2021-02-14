import React from 'react';
import '../styles/displayPictures.css';
import uniqid from 'uniqid';

const DisplayPictures = (props) => {

  const { 
    imageArray,
    pickImage,
    selectImage,
  } = props;

  return (

    <div className = 'content'>
      <div className = 'row'>
        {props.pickImage.map((number, index) =>( 
          <div className = 'column' key = {uniqid()} data-index = 'number'>
            <button  onClick = {selectImage}>
              <img src = {imageArray[number]}></img>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayPictures;