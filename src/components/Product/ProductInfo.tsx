import type { Product } from "@/lib/products";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <Card className="bg-card text-card-foreground shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductInfo;
