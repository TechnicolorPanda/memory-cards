import React, { useState } from 'react';
import DisplayPictures from './DisplayPictures';

const SelectPictures = () => {
  const [imageArray, setImageArray] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  console.log('select pictures');

  let testImage = ('./images/airplant.jpeg');

  console.log(testImage);
  
  return (
    <div>
      <DisplayPictures
        testImage = {testImage}
      />
    </div>
  )
} 

export default SelectPictures;
