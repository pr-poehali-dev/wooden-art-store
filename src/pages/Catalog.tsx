import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type ProductType = {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  description: string;
};

// Демо-данные для продуктов
const products: ProductType[] = [
  {
    id: "shkatulka-1",
    name: "Шкатулка «Царевна-Лебедь»",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    price: 3200,
    category: "shkatulki",
    description: "Изящная шкатулка с росписью «Царевна-Лебедь» для хранения украшений"
  },
  {
    id: "shkatulka-2",
    name: "Шкатулка «Жар-птица»",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=600&auto=format&fit=crop",
    price: 2800,
    category: "shkatulki",
    description: "Шкатулка с традиционной росписью «Жар-птица»"
  },
  {
    id: "podnos-1",
    name: "Поднос «Подсолнухи»",
    image: "https://cdn.poehali.dev/files/cbf25512-ae39-4750-b504-d2e651cf8221.jpg",
    price: 2500,
    category: "podnosy",
    description: "Солнечный поднос с ярким узором подсолнухов"
  },
  {
    id: "podnos-2",
    name: "Поднос «Птица счастья»",
    image: "https://cdn.poehali.dev/files/cbcdd5ff-3bce-4137-884f-62bbc6686940.jpg",
    price: 2700,
    category: "podnosy",
    description: "Деревянный поднос с традиционным узором «Птица счастья»"
  },
  {
    id: "igrushka-1",
    name: "Матрёшка «Зимняя сказка»",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=600&auto=format&fit=crop",
    price: 3500,
    category: "igrushki",
    description: "Набор матрёшек с зимними мотивами, 5 в 1"
  },
  {
    id: "igrushka-2",
    name: "Конь-качалка расписной",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=600&auto=format&fit=crop",
    price: 4200,
    category: "igrushki",
    description: "Традиционная игрушка - деревянный конь-качалка с росписью"
  }
];

const categories = [
  { id: "shkatulki", name: "Шкатулки" },
  { id: "podnosy", name: "Подносы и тарелки" },
  { id: "igrushki", name: "Игрушки" }
];

const Catalog = () => {
  const { categoryId } = useParams();
  
  const filteredProducts = categoryId 
    ? products.filter(product => product.category === categoryId) 
    : products;
  
  const categoryName = categoryId 
    ? categories.find(cat => cat.id === categoryId)?.name || 'Категория'
    : 'Все категории';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            {categoryId && (
              <Link to="/catalog">
                <Button variant="ghost" size="sm" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад к каталогу
                </Button>
              </Link>
            )}
            <h1 className="text-3xl font-bold">{categoryName}</h1>
          </div>

          {!categoryId && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {categories.map((category) => (
                <Link key={category.id} to={`/catalog/${category.id}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold">{category.name}</h2>
                      <p className="text-muted-foreground mt-2">
                        {products.filter(p => p.category === category.id).length} товаров
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow hover-scale">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{product.price} ₽</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;