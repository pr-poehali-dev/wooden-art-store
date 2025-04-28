import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react";

// Демо-данные для продуктов (используем те же данные, что и в Catalog.tsx)
const products = [
  {
    id: "shkatulka-1",
    name: "Шкатулка «Царевна-Лебедь»",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    price: 3200,
    category: "shkatulki",
    description: "Изящная шкатулка с росписью «Царевна-Лебедь» для хранения украшений. Выполнена из липы, покрыта высококачественным лаком. Внутри отделана бархатом. Размеры: 18х12х8 см.",
    dimensions: "18х12х8 см",
    material: "Липа, акриловые краски, лак",
    additionalImages: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "shkatulka-2",
    name: "Шкатулка «Жар-птица»",
    image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=600&auto=format&fit=crop",
    price: 2800,
    category: "shkatulki",
    description: "Шкатулка с традиционной росписью «Жар-птица». Идеальна для хранения мелких украшений и памятных вещиц. Ручная работа, покрыта лаком для долговечности.",
    dimensions: "15х10х6 см",
    material: "Береза, акриловые краски, лак",
    additionalImages: [
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "podnos-1",
    name: "Поднос «Подсолнухи»",
    image: "https://cdn.poehali.dev/files/cbf25512-ae39-4750-b504-d2e651cf8221.jpg",
    price: 2500,
    category: "podnosy",
    description: "Солнечный поднос с ярким узором подсолнухов. Идеален для подачи чая или кофе. Покрыт пищевым лаком, безопасен для контакта с продуктами.",
    dimensions: "35х25 см",
    material: "Липа, акриловые краски, пищевой лак",
    additionalImages: [
      "https://cdn.poehali.dev/files/cbf25512-ae39-4750-b504-d2e651cf8221.jpg",
      "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "podnos-2",
    name: "Поднос «Птица счастья»",
    image: "https://cdn.poehali.dev/files/cbcdd5ff-3bce-4137-884f-62bbc6686940.jpg",
    price: 2700,
    category: "podnosy",
    description: "Деревянный поднос с традиционным узором «Птица счастья». Функциональный предмет интерьера, который можно использовать для сервировки стола.",
    dimensions: "30х20 см",
    material: "Береза, акриловые краски, пищевой лак",
    additionalImages: [
      "https://cdn.poehali.dev/files/cbcdd5ff-3bce-4137-884f-62bbc6686940.jpg",
      "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "igrushka-1",
    name: "Матрёшка «Зимняя сказка»",
    image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=600&auto=format&fit=crop",
    price: 3500,
    category: "igrushki",
    description: "Набор матрёшек с зимними мотивами, 5 в 1. Каждая фигурка расписана вручную и имеет уникальный зимний сюжет.",
    dimensions: "Высота большой матрешки 18 см",
    material: "Липа, акриловые краски, лак",
    additionalImages: [
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "igrushka-2",
    name: "Конь-качалка расписной",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=600&auto=format&fit=crop",
    price: 4200,
    category: "igrushki",
    description: "Традиционная игрушка - деревянный конь-качалка с росписью. Прочная конструкция, безопасная для детей, с яркой традиционной росписью.",
    dimensions: "40х30х20 см",
    material: "Береза, акриловые краски, лак",
    additionalImages: [
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-6">Товар не найден</h1>
          <p className="mb-8">К сожалению, запрашиваемый товар не существует.</p>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to={`/catalog/${product.category}`}>
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад к категории
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="rounded-lg overflow-hidden mb-4 border">
                <img 
                  src={product.additionalImages[activeImage]} 
                  alt={product.name} 
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.additionalImages.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`border rounded overflow-hidden flex-shrink-0 ${
                      activeImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} вид ${index + 1}`} 
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <div className="text-2xl font-bold text-primary mb-6">{product.price} ₽</div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Характеристики:</h3>
                <ul className="space-y-1">
                  <li><span className="font-medium">Размеры:</span> {product.dimensions}</li>
                  <li><span className="font-medium">Материалы:</span> {product.material}</li>
                </ul>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center border rounded-md mr-4">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button className="flex-1" size="lg">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  В корзину
                </Button>
              </div>
              
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm">
                    <span className="font-medium">Доставка:</span> 1-3 рабочих дня по России
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-medium">Оплата:</span> Банковской картой, электронными деньгами
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;