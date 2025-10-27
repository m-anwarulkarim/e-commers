import { products } from "@/lib/products";
import { Link } from "react-router";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface RelatedProductsProps {
  currentId: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentId }) => {
  const related = products.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <section className="mt-10 w-full">
      <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {related.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 text-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg mb-3 w-full h-40 object-cover"
                />
                <CardTitle className="text-lg">{item.name}</CardTitle>
                <p className="text-sm text-muted-foreground">${item.price}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
