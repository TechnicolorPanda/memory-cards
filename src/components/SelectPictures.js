import React, { useState, useEffect } from 'react';
import DisplayPictures from './DisplayPictures';
import Score from './Score';

const SelectPictures = () => {

  // sets states

  const [pickImage, setPickImage] = useState([]);
  const [usedImages, setUsedImages] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

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

  // generates 5 random pictures
  // TODO: add more images if duplicates are eliminated

  useEffect(() => {
     console.log('set pick image');

      setPickImage(pickImage => pickImage.splice(0, 5));
      for(let i=0; i < 5; i++) {
        let argumentNumber = (Math.floor(Math.random() * 15));
        setPickImage(pickImage => pickImage.concat(argumentNumber));

        // eliminates duplicate images
        setPickImage(pickImage => [...new Set(pickImage)]);
      }
   },[currentScore])

  // resets game after an incorrect selection

  function tryAgain() {
    setUsedImages([]);
    setCurrentScore(-1);
  }

  // determines if image selected has previously been selected

  const addImage = (event) => {
    const newPicture = event.target.src;
    setUsedImages(usedImages => usedImages.concat(event.target.src));
    for(let i = 0; i < usedImages.length-1; i++) {
      if (newPicture === usedImages[i]) {
        tryAgain();
      }
    }
    setCurrentScore(currentScore => (currentScore + 1));
  }

  return (
    <div>
      <Score
        currentScore = {currentScore}
      />
      <DisplayPictures
        imageArray = {imageArray}
        pickImage = {pickImage}
        selectImage = {addImage.bind(this)}
      />
    </div>
  )
} 

export default SelectPictures;
