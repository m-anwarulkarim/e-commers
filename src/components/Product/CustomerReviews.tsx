import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Aminul Islam",
    rating: 5,
    comment: "অসাধারণ প্রোডাক্ট! ব্যাটারি ব্যাকআপ দারুন!",
  },
  {
    id: 2,
    name: "Rima Khatun",
    rating: 4,
    comment: "ডিজাইনটা ভালো লেগেছে, ডেলিভারি একটু দেরি হয়েছে।",
  },
];

const CustomerReviews = () => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{review.name}</span>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
