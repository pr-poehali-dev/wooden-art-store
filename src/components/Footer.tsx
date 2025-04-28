import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Деревянные Сказы</h3>
            <p className="mb-4">Уникальные изделия из дерева с ручной росписью для вашего дома и в подарок близким.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-white/80" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-white/80" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white/80 transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-white/80 transition-colors">Каталог</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white/80 transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-white/80 transition-colors">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-white/80 transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/shkatulki" className="hover:text-white/80 transition-colors">Шкатулки</Link>
              </li>
              <li>
                <Link to="/catalog/podnosy" className="hover:text-white/80 transition-colors">Подносы и тарелки</Link>
              </li>
              <li>
                <Link to="/catalog/igrushki" className="hover:text-white/80 transition-colors">Игрушки</Link>
              </li>
              <li>
                <Link to="/catalog/suveniry" className="hover:text-white/80 transition-colors">Сувениры</Link>
              </li>
              <li>
                <Link to="/catalog/interier" className="hover:text-white/80 transition-colors">Предметы интерьера</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0" />
                <span>info@derevyannye-skazy.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0" />
                <span>г. Москва, ул. Мастеров, д. 15</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 Деревянные Сказы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;