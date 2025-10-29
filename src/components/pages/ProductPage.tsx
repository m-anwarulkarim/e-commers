import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGetProductsQuery } from "../RTK/features/api/products.Api";
import { UseCart } from "../context/CartContext";

const ProductPage = () => {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const { addToCart } = UseCart();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products!</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <Card
            key={product.id}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </Link>
            <CardContent>
              <CardHeader>
                <CardTitle className="text-lg">{product.title}</CardTitle>
              </CardHeader>
              <p className="text-sm text-muted-foreground">${product.price}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  addToCart({
                    ...product,
                    quantity: 1,
                    image: product.images[0],
                    name: product.title,
                  })
                }
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
