import { FC } from 'react';

type ReviewDetails = {
  params: {
    productId: string;
    reviewId: string;
  };
};

const ReviewDetails: FC<ReviewDetails> = ({ params }) => {
  return (
    <div>
      Review {params.reviewId} for product: {params.productId}
    </div>
  );
};

export default ReviewDetails;
