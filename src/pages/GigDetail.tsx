import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from './ProductDetail';

const GigDetail = () => {
  // This component now redirects to ProductDetail for consistency
  return <ProductDetail />;
};

export default GigDetail;