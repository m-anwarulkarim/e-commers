import { useParams } from "react-router";
import { useState } from "react";
import ProductImage from "@/components/Product/ProductImage";
import ProductInfo from "@/components/Product/ProductInfo";
import QuantitySelector from "@/components/Product/QuantitySelector";
import AddToCartButton from "@/components/Product/AddToCartButton";
import RelatedProducts from "@/components/Product/RelatedProducts";
import CustomerReviews from "@/components/Product/CustomerReviews";
import { products } from "@/lib/products";
import { useCart } from "../context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  const { addToCart } = useCart(); // context থেকে addToCart ফাংশন
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-muted-foreground">Product not found!</p>
      </div>
    );
  }

  const totalPrice = product.price * quantity;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Product Image */}
        <ProductImage image={product.image} alt={product.name} />

        {/* Product Info + Quantity + AddToCart */}
        <div className="flex-1">
          <ProductInfo product={product} />

          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

          <p className="mt-4 text-lg font-medium">
            Total: <span className="font-bold">${totalPrice}</span>
          </p>

          <AddToCartButton onAdd={handleAddToCart} />
        </div>
      </div>

      {/* Related + Reviews */}
      <RelatedProducts currentId={product.id} />
      <CustomerReviews />
    </div>
  );
};

export default ProductDetailsPage;
