import React from 'react';

const ImageDisplay = ({ imageData }) => {
  // Convert the ArrayBuffer to a Uint8Array
  const uint8Array = new Uint8Array(imageData);

  // Convert the Uint8Array to a base64-encoded string
  const base64String = btoa(String.fromCharCode.apply(null, uint8Array));

  // Convert the base64-encoded string to a data URL
  const dataUrl = `data:image/jpeg;base64,${base64String}`;

  return <img src={dataUrl} alt="Image" />;
};

export default ImageDisplay;
