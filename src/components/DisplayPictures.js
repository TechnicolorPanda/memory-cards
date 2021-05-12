import React from 'react';
import '../styles/displayPictures.css';
import uniqid from 'uniqid';

const DisplayPictures = (props) => {

  const { 
    imageArray,
    pickImage,
    selectImage,
    reset,
  } = props;

  return (
    <div className = 'content'>
      <div className = 'row'>
        {pickImage.map((number) => ( 
          <div className = 'column' key = {uniqid()}>
            <button  onClick = {selectImage}>
              <img src = {imageArray[number]} alt = {imageArray[number]}></img>
            </button>
          </div>
        ))}
      </div>
      <div>
        <button 
          className = 'reset'
          onClick = {reset}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default DisplayPictures;