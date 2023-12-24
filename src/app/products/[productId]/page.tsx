import { FC } from 'react';

type ProductDetails = {
  params: {
    productId: string;
  };
};

const ProductDetails: FC<ProductDetails> = ({ params }) => {
  return <div>ProductDetails: {params?.productId}</div>;
};

export default ProductDetails;
