import React from 'react';
import '../styles/displayPictures.css';

const DisplayPictures = (props) => {

  const { 
    imageArray
  } = props;


  
  return (

    <div class = 'content'>
      <div class = 'row'>
        <div class = 'column'>
          <img src = {imageArray[0]}></img>
        </div>
        <div class = 'column'>
         <img src = {imageArray[3]}></img>
        </div>
        <div class = 'column'>
          <img src = {imageArray[6]}></img>
        </div>
        <div class = 'column'>
         <img src = {imageArray[11]}></img>
        </div>
        <div class = 'column'>
         <img src = {imageArray[14]}></img>
        </div>
      </div>
    </div>
  );
}

export default DisplayPictures;