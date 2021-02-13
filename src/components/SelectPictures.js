import React, { useState, useEffect } from 'react';
import DisplayPictures from './DisplayPictures';

const SelectPictures = () => {
// populates array with images with which to select

const [pickImage, setPickImage] = useState('');

  const airplant = ('./images/airplant.jpeg');
  const bamboo = ('./images/bamboo.jpeg');
  const begonia = ('./images/begonia.jpeg');
  const birkin = ('./images/birkin.jpeg');
  const cactus = ('./images/cactus.jpeg');
  const fiddleLeafFig = ('./images/fiddleleaffig.jpeg');
  const monstera = ('./images/monstera.jpeg');
  const pilea = ('./images/pilea.jpeg');
  const pothos = ('./images/pothos.jpeg');
  const rattlesnake = ('./images/rattlesnake.jpeg');
  const rubberPlant = ('./images/rubberplant.jpeg');
  const scindapsis = ('./images/scindapsis.jpeg');
  const snakePlant = ('./images/snakePlant.jpeg');
  const stromanthe = ('./images/stromanthe.jpeg');
  const zzPlant = ('./images/zzplant.jpeg');
  const imageArray = [
    airplant,
    bamboo,
    begonia,
    birkin,
    cactus,
    fiddleLeafFig,
    monstera,
    pilea,
    pothos,
    rattlesnake,
    rubberPlant,
    scindapsis,
    snakePlant,
    stromanthe,
    zzPlant,
  ];
  // defines states used

//   const [selectedImages, setSelectedImages] = useState([]);

//   const [argumentNumber, setArgumentNumber] = useState('');

  useEffect(() => {
    for(let i=0; i<=4; i++) {
      let argumentNumber = (Math.floor(Math.random() * 15));
      console.log(argumentNumber);
      setPickImage(argumentNumber);
      console.log(pickImage);
    }
  },[])

  
  return (
    <div>
      <DisplayPictures
        imageArray = {imageArray}
      />
    </div>
  )
} 

export default SelectPictures;
