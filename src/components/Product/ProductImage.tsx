import React from "react";

interface ProductImageProps {
  image: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ image, alt }) => {
  console.log(image);

  return (
    <img
      src={image}
      alt={alt}
      className="w-full max-w-md rounded-2xl shadow-md object-cover"
    />
  );
};

export default ProductImage;
