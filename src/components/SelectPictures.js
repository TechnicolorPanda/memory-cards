import React, { useState, useEffect } from 'react';
import DisplayPictures from './DisplayPictures';

const SelectPictures = () => {

const [pickImage, setPickImage] = useState([]);

//   const [selectedImages, setSelectedImages] = useState([]);

//   const [argumentNumber, setArgumentNumber] = useState('');

// populates array with images with which to select

  const airplant = ('./images/airplant.jpeg');
  const bamboo = ('./images/bamboo.jpeg');
  const begonia = ('./images/begonia.jpeg');
  const birkin = ('./images/birkin.jpeg');
  const cactus = ('./images/cactus.jpeg');
  const fiddleLeafFig = ('./images/fiddleleaffig.jpeg');
  const monstera = ('./images/monstera.jpeg');
  const pilea = ('./images/pilea.jpeg');
  const pothos = ('./images/pothos.jpeg');
  const anthurium = ('./images/anthurium.jpeg');
  const rubberPlant = ('./images/rubberplant.jpeg');
  const scindapsis = ('./images/scindapsis.jpeg');
  const plant = ('./images/plant.jpeg');
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
    anthurium,
    rubberPlant,
    scindapsis,
    plant,
    stromanthe,
    zzPlant,
  ];

  useEffect(() => {
      for(let i=0; i < 5; i++) {
        let argumentNumber = (Math.floor(Math.random() * 15));
        console.log(argumentNumber);
        setPickImage(pickImage => pickImage.concat(argumentNumber));
        setPickImage(pickImage => [...new Set(pickImage)]);
      }
   },[])

  
  return (
    <div>
      <DisplayPictures
        imageArray = {imageArray}
        pickImage = {pickImage}
      />
    </div>
  )
} 

export default SelectPictures;
