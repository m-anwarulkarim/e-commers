import { useParams } from "react-router";
import { useState } from "react";
import ProductImage from "@/components/Product/ProductImage";
import QuantitySelector from "@/components/Product/QuantitySelector";
import { useCart } from "../context/CartContext";
import { useGetProductByIdQuery } from "../RTK/features/api/products.Api";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(Number(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (isLoading) return <p>Loading...</p>;
  if (isError || !product) return <p>Product not found!</p>;

  const handleAddToCart = () =>
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity,
      image: product.images[0],
    });

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      <ProductImage image={product.images[0]} alt={product.title} />
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 text-lg">${product.price}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {product.description}
        </p>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
