import React from 'react';
import './Services.sass';
import { CurrencyDollarIcon, UserGroupIcon, ClipboardCheckIcon } from '@heroicons/react/solid';

function Services() {
  return (
    <div className="bg-blue-200 min-h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold text-indigo-700 mb-4">
          Bem-vindo à Contabilidade XYZ
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sua contabilidade confiável e amigável.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <CurrencyDollarIcon className="w-16 h-16 text-indigo-700 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Consultoria Financeira</h2>
            <p className="text-gray-600">Ajudamos a otimizar suas finanças para o sucesso do seu negócio.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <UserGroupIcon className="w-16 h-16 text-indigo-700 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Atendimento Personalizado</h2>
            <p className="text-gray-600">Oferecemos um atendimento dedicado para entender suas necessidades.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <ClipboardCheckIcon className="w-16 h-16 text-indigo-700 mx-auto" />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Precisão e Confiança</h2>
            <p className="text-gray-600">Nossa equipe experiente garante a precisão e confiabilidade de nossos serviços.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
