import React, { useState } from 'react';
import DisplayPictures from './DisplayPictures';

const SelectPictures = () => {

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
  const [imageArray, setImageArray] = useState([
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
  ]);
  const [selectedImages, setSelectedImages] = useState([]);

  console.log('select pictures');

  return (
    <div>
      <DisplayPictures
        imageArray = {imageArray}
      />
    </div>
  )
} 

export default SelectPictures;
