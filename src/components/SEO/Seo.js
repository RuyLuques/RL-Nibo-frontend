import React from 'react';
import { SearchOutline, PencilAltOutline, LinkOutline, ClipboardListOutline, UserOutline, TrendingUpOutline, PresentationChartLineOutline, CloudOutline, CogOutline, ShieldCheckOutline } from 'heroicons-react';

const Seo = () => {
    return (
        <div className="bg-indigo-800 min-h-screen p-8">
        <h1 className="text-3xl text-center font-semibold mb-8 lg:text-5xl md:text-4xl text-white">SEO</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <SearchOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">Pesquisa de Palavras-chave</h2>
                    <p>Identifique palavras-chave relevantes para seu nicho de mercado e público-alvo.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <PencilAltOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">Otimização de Conteúdo</h2>
                    <p>Crie conteúdo de alta qualidade e relevante para as palavras-chave identificadas.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <LinkOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">Backlinks de Qualidade</h2>
                    <p>Construa uma estratégia de aquisição de backlinks de fontes confiáveis e relevantes.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <ClipboardListOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">SEO On-Page</h2>
                    <p>Otimize elementos diretamente no seu site, como meta tags, URLs e estrutura de links internos.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <UserOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">SEO Off-Page</h2>
                    <p>Gerencie a presença em mídias sociais, compartilhamento social e menções de marca.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <TrendingUpOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">SEO Técnico</h2>
                    <p>Garanta que seu site seja tecnicamente otimizado e compatível com dispositivos móveis.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <PresentationChartLineOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">Experiência do Usuário (UX)</h2>
                    <p>Ofereça uma experiência excepcional, incluindo tempos de carregamento rápidos e design responsivo.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <CloudOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">SEO Local</h2>
                    <p>Se aplicável, otimize para pesquisas locais e gerencie sua presença local.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <CogOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">Monitoramento e Análise</h2>
                    <p>Use ferramentas de análise para acompanhar o desempenho e fazer ajustes conforme necessário.</p>
                </div>

                <div className="bg-white rounded-lg shadow p-4">
                    <ShieldCheckOutline className="w-8 h-8 text-blue-500" />
                    <h2 className="text-lg font-semibold">Segurança do Site</h2>
                    <p>Garanta que seu site seja seguro e protegido contra ameaças online, como malware.</p>
                </div>
            </div>
        </div>
    );
};

export default Seo;
