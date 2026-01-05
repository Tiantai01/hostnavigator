import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ChevronRight, Server, Terminal, Database } from 'lucide-react';

const ProductSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PRODUCTS[0].id);
  const activeProduct = PRODUCTS.find(p => p.id === activeTab) || PRODUCTS[0];

  const getIcon = (id: string) => {
    switch(id) {
        case 'wp': return Server;
        case 'app': return Terminal;
        case 'db': return Database;
        default: return Server;
    }
  }

  return (
    <section className="py-24 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                One Platform.<br />
                Limitless Possibilities.
              </h2>
              <p className="text-gray-400">
                Manage all your projects from a single, unified dashboard designed for clarity.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {PRODUCTS.map((product) => {
                const Icon = getIcon(product.id);
                return (
                  <button
                    key={product.id}
                    onClick={() => setActiveTab(product.id)}
                    className={`text-left px-6 py-5 rounded-lg border transition-all duration-200 flex items-center gap-4 group ${
                      activeTab === product.id
                        ? 'bg-kinsta-panel border-kinsta-primary shadow-lg'
                        : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded flex items-center justify-center transition-colors ${
                        activeTab === product.id ? 'bg-kinsta-primary text-white' : 'bg-white/10 text-gray-400 group-hover:text-white'
                    }`}>
                        <Icon size={20} />
                    </div>
                    <div>
                        <span className={`block font-bold ${activeTab === product.id ? 'text-white' : 'text-gray-300'}`}>
                        {product.label}
                        </span>
                        {activeTab === product.id && (
                            <span className="text-xs text-kinsta-accent mt-1 block">Active Selection</span>
                        )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8">
            <div className="bg-kinsta-panel border border-kinsta-border rounded-2xl p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-kinsta-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                    <div className="flex flex-wrap gap-4 mb-8">
                        {activeProduct.techSpecs.map((spec, idx) => (
                            <div key={idx} className="bg-black/30 border border-white/10 px-4 py-2 rounded text-xs font-mono text-gray-300">
                                <span className="text-gray-500 mr-2">{spec.label}:</span>
                                <span className="text-white font-semibold">{spec.value}</span>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-4 font-heading">{activeProduct.headline}</h3>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl">
                        {activeProduct.subheadline}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                        {activeProduct.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-kinsta-accent shrink-0" />
                                <span className="text-sm font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto">
                        <button className="inline-flex items-center gap-2 bg-white text-kinsta-dark font-bold px-6 py-3 rounded hover:bg-gray-200 transition-colors">
                            {activeProduct.cta}
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSwitcher;