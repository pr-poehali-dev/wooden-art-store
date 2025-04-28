import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const products: ProductType[] = [
  {
    id: 1,
    name: "Шкатулка «Лесные мотивы»",
    price: 2800,
    image: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?q=80&w=400&auto=format&fit=crop",
    category: "shkatulki"
  },
  {
    id: 2,
    name: "Декоративная тарелка «Цветочная»",
    price: 1950,
    image: "https://images.unsplash.com/photo-1577140052816-af7315b1011a?q=80&w=400&auto=format&fit=crop",
    category: "podnosy"
  },
  {
    id: 3,
    name: "Матрёшка «Русские мотивы»",
    price: 3200,
    image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=400&auto=format&fit=crop",
    category: "igrushki"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Популярные товары</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{product.name}</h3>
                </Link>
                <p className="text-xl font-bold text-primary">{product.price} ₽</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link to={`/product/${product.id}`}>Подробнее</Link>
                </Button>
                <Button size="sm">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  В корзину
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/catalog" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-6"
          >
            Перейти в каталог
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;