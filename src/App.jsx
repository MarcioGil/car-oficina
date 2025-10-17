import './App.css';
import { motion } from 'framer-motion';
import { Wrench, Shield, Star, Clock, Award, Phone, Mail, MapPin, MessageCircle, CheckCircle, Sparkles, Car, Target, User } from 'lucide-react';
import BeforeAfterSlider from './components/BeforeAfterSlider';

// Import images - ORDEM CORRETA: ANTES (danificado) -> DEPOIS (restaurado)
// Caso 1: Carro com frente batida -> Carro restaurado branco
import before1 from './assets/1000042937.jpg'; // Frente batida
import after1 from './assets/1000042922.jpg';  // Restaurado branco

// Caso 2: Carro com frente muito danificada -> Carro restaurado cinza BRILHOS CAR
import before2 from './assets/1000042940.jpg'; // Muito danificado
import after2 from './assets/1000042931.jpg';  // Restaurado cinza com logo

// Caso 3: Carro com para-brisa quebrado -> Carro restaurado cinza
import before3 from './assets/1000042919.jpg'; // Para-brisa quebrado
import after3 from './assets/1000042934.jpg';  // Restaurado cinza

// Caso 4: Carro com lateral batida -> Carro restaurado lateral
import before4 from './assets/1000042916.jpg'; // Lateral batida
import after4 from './assets/1000042943.jpg';  // Restaurado

import shopImage from './assets/1000042898.jpg';

function App() {
  const beforeAfterCases = [
    {
      before: before1,
      after: after1,
      title: 'Restauração Completa de Colisão Frontal',
      description: 'Funilaria, pintura e polimento profissional - transformação total'
    },
    {
      before: before2,
      after: after2,
      title: 'Recuperação de Danos Graves',
      description: 'Danos frontais severos restaurados com perfeição e acabamento impecável'
    },
    {
      before: before3,
      after: after3,
      title: 'Troca de Para-brisa e Restauração',
      description: 'Recuperação total de danos estruturais com pintura premium'
    },
    {
      before: before4,
      after: after4,
      title: 'Funilaria e Pintura Lateral',
      description: 'Reparos complexos com acabamento de fábrica'
    }
  ];

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Funilaria e Pintura',
      description: 'Reparos estruturais e pintura automotiva de alta qualidade com acabamento perfeito.'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Restauração Completa',
      description: 'Transformação total de veículos acidentados ou danificados.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Polimento e Cristalização',
      description: 'Recuperação do brilho original da pintura com técnicas profissionais.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reparos de Colisão',
      description: 'Especialistas em recuperação de veículos com danos de acidentes.'
    }
  ];

  const differentials = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Qualidade Garantida',
      description: 'Garantia em todos os serviços realizados'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Profissionais Experientes',
      description: 'Equipe altamente qualificada'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Atendimento Rápido',
      description: 'Prazos cumpridos com eficiência'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Orçamento Transparente',
      description: 'Sem surpresas no valor final'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Brilhos Car</h1>
                <p className="text-xs text-gray-600">Funilaria e Pintura</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Serviços
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Galeria
              </button>
              <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Missão
              </button>
              <button onClick={() => scrollToSection('director')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Diretor
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all font-semibold">
                Contato
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-red-600/10"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Transformamos
                <span className="block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  Seu Veículo
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Especialistas em funilaria, pintura e restauração automotiva com qualidade profissional e garantia
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Solicite um Orçamento
                </button>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:shadow-xl transition-all"
                >
                  Ver Transformações
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {differentials.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas para deixar seu veículo como novo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Antes e Depois
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja a qualidade do nosso trabalho através de transformações reais
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Arraste o controle para comparar as imagens
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {beforeAfterCases.map((item, index) => (
              <BeforeAfterSlider
                key={index}
                beforeImage={item.before}
                afterImage={item.after}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Proporcionar serviços de funilaria e pintura automotiva com excelência, transformando veículos danificados em obras de arte sobre rodas, superando as expectativas dos nossos clientes através de qualidade superior, atendimento personalizado e compromisso com prazos.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acreditamos que cada veículo merece o melhor tratamento, e trabalhamos incansavelmente para devolver não apenas a beleza original, mas também a confiança e satisfação dos nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Director Section */}
      <section id="director" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                André Alexandre
              </h2>
              <p className="text-2xl text-blue-600 font-semibold mb-8">
                Diretor e Fundador da Brilhos Car
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Com mais de uma década de experiência no setor automotivo, <strong className="text-gray-900">André Alexandre</strong> é o visionário por trás da Brilhos Car. Sua paixão por transformar veículos e seu compromisso inabalável com a qualidade são os pilares que sustentam a empresa.
              </p>
              <p>
                Especialista em técnicas avançadas de funilaria e pintura, André combina conhecimento técnico profundo com uma visão empresarial focada na satisfação total do cliente. Sua liderança inspiradora e atenção aos detalhes garantem que cada projeto seja executado com perfeição.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-blue-50 rounded-2xl">
                <Award className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Excelência Técnica</h3>
                <p className="text-gray-600 text-sm">Domínio completo de técnicas modernas de restauração</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-2xl">
                <Star className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Visão de Qualidade</h3>
                <p className="text-gray-600 text-sm">Compromisso com os mais altos padrões do mercado</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-2xl">
                <CheckCircle className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Liderança Inspiradora</h3>
                <p className="text-gray-600 text-sm">Forma equipes dedicadas e apaixonadas pelo trabalho</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={shopImage}
                alt="Oficina Brilhos Car"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a Brilhos Car
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Somos especialistas em funilaria e pintura automotiva, dedicados a transformar veículos danificados em obras de arte sobre rodas. Nossa equipe possui anos de experiência e utiliza as melhores técnicas e equipamentos do mercado.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Cada projeto é tratado com atenção aos mínimos detalhes, garantindo que seu veículo saia da nossa oficina com a qualidade que você merece. Nosso compromisso é com a excelência e a satisfação total dos nossos clientes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Garantia de Qualidade</h3>
                    <p className="text-gray-600">Todos os serviços com garantia e acompanhamento pós-entrega</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Profissionais Certificados</h3>
                    <p className="text-gray-600">Equipe treinada e experiente em restauração automotiva</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Atendimento Personalizado</h3>
                    <p className="text-gray-600">Cada cliente recebe atenção especial e orçamento detalhado</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-900 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Solicite um orçamento sem compromisso e transforme seu veículo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <motion.a
              href="https://wa.me/552126616471"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-blue-100">(21) 2661-6471</p>
            </motion.a>

            <motion.a
              href="mailto:brilhos2022car@gmail.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100 text-sm">brilhos2022car@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Flora+Gildice+48+Heliopolis+Belford+Roxo+RJ"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all group text-center"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-blue-100 text-sm">Rua Flora Gildice, 48<br />Héliopolis, Belford Roxo - RJ</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Brilhos Car</h3>
                  <p className="text-xs text-gray-400">Funilaria e Pintura Automotiva de Qualidade</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">© 2025 Brilhos Car. Todos os direitos reservados.</p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-2">Desenvolvido por</p>
              <a 
                href="https://wa.me/5521964949427" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                <span>MG Dev - (21) 96494-9427</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/552126616471"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
}

export default App;

