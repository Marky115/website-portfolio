// utils/imagePath.js
export const getImagePath = (imagePath) => {
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/website-portfolio' : '';
  
  // Remove leading slash if it exists, then add basePath
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${basePath}/${cleanPath}`;
};


import { useMemo } from 'react';

export const useImagePath = (imagePath) => {
  return useMemo(() => {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/website-portfolio' : '';
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
    return `${basePath}/${cleanPath}`;
  }, [imagePath]);
};