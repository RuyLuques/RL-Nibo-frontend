import React, { useState } from 'react';
import { HeartIcon, ClipboardListIcon, SpeakerphoneIcon, PhoneIcon, CheckIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div>
      {/* Navbar */}
     <header className="bg-red-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Logo</div>
          <div className="md:hidden flex ml-auto">
            <button
              onClick={toggleMenu}
              className="text-sm text-white hover:text-gray-300"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="md:flex space-x-4">
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link to="/" className="text-sm font-bold text-white hover:font-bold">
                  <i className="fa fa-home text-indigo-800"></i> Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="bg-red-500 p-4 mx-auto md:hidden">
          <ul className="p-4 space-y-4">
            <li>
                <Link to="/" className="text-sm font-bold text-white hover:font-bold">
                  <i className="fa fa-home text-indigo-800"></i> Home
                </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-indigo-800 text-white py-16 p-5">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo à nossa Landing Page</h1>
          <p className="text-lg mb-8">A sua solução completa para... <span className="text-yellow-400">contadores</span>.</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-yellow-400 text-blue-900 hover:bg-yellow-500 py-2 px-4 rounded-full font-semibold transition duration-300">Saiba Mais</a>
            <a href="#" className="bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">Contato</a>
          </div>
        </div>
      </div>

      {/* Conteúdo Focado no Público */}
      <section className="bg-white py-12 p-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Por que escolher o nosso serviço?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4">
              <HeartIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Serviço de Qualidade</h3>
              <p className="mt-2">Oferecemos serviços de alta qualidade com foco nas necessidades dos nossos clientes.</p>
            </div>
            <div className="p-4">
              <ClipboardListIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Variedade de Serviços</h3>
              <p className="mt-2">Oferecemos uma variedade de serviços contábeis para atender às diversas necessidades dos nossos clientes.</p>
            </div>
            <div className="p-4">
              <SpeakerphoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Comunicação Eficiente</h3>
              <p className="mt-2">Mantemos uma comunicação eficiente e constante com os nossos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Tipos de Serviços */}
      <section className="bg-gray-100 py-12 p-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="p-4">
              <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Serviço 1</h3>
              <p className="mt-2">Descrição do serviço 1.</p>
            </div>
            <div className="p-4">
              <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Serviço 2</h3>
              <p className="mt-2">Descrição do serviço 2.</p>
            </div>
            <div className="p-4">
              <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Serviço 3</h3>
              <p className="mt-2">Descrição do serviço 3.</p>
            </div>
            <div className="p-4">
              <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Serviço 4</h3>
              <p className="mt-2">Descrição do serviço 4.</p>
            </div>
            <div className="p-4">
              <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
              <h3 className="text-2xl font-semibold mt-4">Serviço 5</h3>
              <p className="mt-2">Descrição do serviço 5.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Venda */}
      <section className="bg-indigo-800 text-white py-12 p-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Entre em Contato</h2>
          <p className="mb-8">Preencha o formulário abaixo e entraremos em contato com você em breve.</p>
          <form>
            <div className="mb-4">
              <label className="block text-lg">Nome</label>
              <input type="text" className="w-full p-2 border border-white rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-lg">Email</label>
              <input type="email" className="w-full p-2 border border-white rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-lg">Mensagem</label>
              <textarea className="w-full p-2 border border-white rounded" rows="4"></textarea>
            </div>
            <button className="bg-yellow-400 text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300 hover:bg-yellow-500">Enviar</button>
          </form>
        </div>
      </section>

      {/* Sobre a Empresa */}
      <section className="bg-white py-12 p-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Sobre a Nossa Empresa</h2>
          <p className="mb-8">Somos uma empresa dedicada a fornecer serviços de contabilidade de alta qualidade desde 20XX.</p>
          <p>Nossos profissionais altamente qualificados estão prontos para ajudar você e sua empresa a prosperar. Entre em contato conosco hoje mesmo para saber mais sobre como podemos atender às suas necessidades contábeis.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-500 py-4">
        <div className="container mx-auto text-white text-center">
          <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
        </div>
      </footer>
     </div>
  );
};

export default LandingPage;
