import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

type CategoryType = {
  id: string;
  name: string;
  image: string;
  description: string;
};

const categories: CategoryType[] = [
  {
    id: "shkatulki",
    name: "Шкатулки",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=400&auto=format&fit=crop",
    description: "Изящные шкатулки с росписью для хранения украшений и мелочей"
  },
  {
    id: "podnosy",
    name: "Подносы и тарелки",
    image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=400&auto=format&fit=crop",
    description: "Функциональные предметы быта с красочными узорами"
  },
  {
    id: "igrushki",
    name: "Игрушки",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=400&auto=format&fit=crop",
    description: "Деревянные игрушки с яркой росписью для детей и коллекционеров"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Наши категории</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/catalog/${category.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow hover-scale">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/catalog" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-6"
          >
            Смотреть все категории
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;