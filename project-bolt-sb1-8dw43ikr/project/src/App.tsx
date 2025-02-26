import React, { useState, useEffect } from 'react';
import { Star, Shield, Leaf, Zap, Repeat, MessageCircle, Timer } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState('23:59:59');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const [hours, minutes, seconds] = timeLeft.split(':').map(Number);
      let newSeconds = seconds - 1;
      let newMinutes = minutes;
      let newHours = hours;

      if (newSeconds < 0) {
        newSeconds = 59;
        newMinutes -= 1;
      }
      if (newMinutes < 0) {
        newMinutes = 59;
        newHours -= 1;
      }
      if (newHours < 0) {
        newHours = 23;
      }

      setTimeLeft(`${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const showRandomPopup = () => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    };

    const interval = setInterval(showRandomPopup, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Limpeza Profunda.<br/>
              <span className="text-blue-600">Sem Esforço.</span>
            </h1>
            <p className="text-xl text-gray-600">
              Descubra o poder da limpeza profissional em suas mãos.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Comprar Agora
              </button>
              <div className="flex items-center space-x-2 text-red-600">
                <Timer size={24} />
                <span className="font-mono">{timeLeft}</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800"
              alt="Produto de Limpeza"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <BenefitCard icon={<Leaf />} title="Ecológico & Seguro" description="100% biodegradável e seguro para sua família" />
            <BenefitCard icon={<Shield />} title="99,9% Eficaz" description="Elimina praticamente todas as bactérias" />
            <BenefitCard icon={<Zap />} title="Ação Instantânea" description="Resultados visíveis em segundos" />
            <BenefitCard icon={<Repeat />} title="Multiuso" description="Eficaz em qualquer superfície" />
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Antes e Depois</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1584656066192-ea0c76b5b033?w=400"
                alt="Antes"
                className="rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-semibold">Antes</span>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400"
                alt="Depois"
                className="rounded-lg"
              />
              <span className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-semibold">Depois</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-4xl font-bold text-center mb-16">O Que Dizem Nossos Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              name="Mariana S."
              text="Nunca vi um produto limpar tão rápido! Recomendo demais."
              rating={5}
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
              name="João P."
              text="Produto excepcional! Uso em toda minha casa."
              rating={5}
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
              name="Ana L."
              text="Superou todas as minhas expectativas. Vale cada centavo!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Oferta Especial</h2>
          <div className="text-2xl mb-8">
            <span className="line-through opacity-75">R$ 99,90</span>
            <span className="ml-4 text-4xl font-bold">R$ 69,90</span>
          </div>
          <button className="bg-white text-blue-600 px-12 py-6 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors">
            Quero Aproveitar Agora!
          </button>
          <div className="mt-8 flex justify-center items-center gap-4">
            <Shield size={24} />
            <span>Compra 100% Segura • 30 Dias de Garantia</span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={24} />
      </a>

      {/* Social Proof Popup */}
      {showPopup && (
        <div className="fixed bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg animate-slide-up">
          <p className="text-sm">
            <span className="font-semibold">João</span> acabou de comprar em São Paulo!
          </p>
        </div>
      )}
    </div>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, text, rating }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
          <div className="flex text-yellow-400">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}

export default App;