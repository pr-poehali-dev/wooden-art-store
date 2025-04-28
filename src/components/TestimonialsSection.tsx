import { Card, CardContent } from "@/components/ui/card";

type TestimonialType = {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Елена Смирнова",
    date: "15.03.2025",
    text: "Заказывала шкатулку в подарок маме. Изделие превзошло все мои ожидания! Очень красивая роспись, аккуратная работа. Мама в восторге, спасибо мастеру за такую красоту.",
    rating: 5
  },
  {
    id: 2,
    name: "Игорь Петров",
    date: "02.02.2025",
    text: "Приобрел набор деревянных подставок под горячее. Качество отличное, роспись яркая и детальная. Доставка была быстрой, товар хорошо упакован. Рекомендую всем!",
    rating: 5
  },
  {
    id: 3,
    name: "Анна Козлова",
    date: "20.01.2025",
    text: "Купила матрешку 'Времена года' в коллекцию. Работа выполнена на высшем уровне. Мастер очень внимателен к деталям. Буду еще заказывать у этого мастера.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Отзывы наших покупателей</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;