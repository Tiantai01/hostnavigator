import React, { useState, useEffect } from 'react';
import { PROVIDERS } from '../constants';
import { ExternalLink, Zap } from 'lucide-react';

// Sub-component to handle logo loading and fallbacks gracefully
const ProviderLogo = ({ name, websiteUrl }: { name: string, websiteUrl: string }) => {
    const getDomain = (url: string) => {
        try {
            return new URL(url).hostname;
        } catch {
            return '';
        }
    };

    const domain = getDomain(websiteUrl);
    // Priority 1: Clearbit (High quality brand logos)
    const [src, setSrc] = useState(`https://logo.clearbit.com/${domain}?size=128`);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!src.includes('google.com')) {
            // Priority 2: Google Favicon (Robust fallback)
            setSrc(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`);
        } else {
            // Priority 3: Text Fallback
            setHasError(true);
        }
    };

    if (hasError) {
        return (
            <div className="w-full h-full flex items-center justify-center text-black font-bold font-heading text-xl">
                {name.charAt(0)}
            </div>
        );
    }

    return (
        <img 
            src={src} 
            alt={`${name} logo`}
            className="w-full h-full object-contain p-0.5"
            loading="lazy"
            onError={handleError}
        />
    );
};

const ProviderList: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Managed WP', 'Cloud VPS', 'Serverless', 'Dedicated', 'Database'];

  // Handle Hash Navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const decodedHash = decodeURIComponent(hash);
      
      if (categories.includes(decodedHash)) {
        setFilter(decodedHash);
        // Smooth scroll to directory
        const element = document.getElementById('directory');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Check on mount
    if (window.location.hash) {
      handleHashChange();
    }

    // Listen for changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const filteredProviders = filter === 'All' 
    ? PROVIDERS 
    : PROVIDERS.filter(p => p.category === filter);

  return (
    <section id="directory" className="py-20 min-h-screen scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border pb-4">
            <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => {
                            setFilter(cat);
                            window.location.hash = cat === 'All' ? 'directory' : cat;
                        }}
                        className={`font-mono text-sm uppercase tracking-wider transition-colors whitespace-nowrap ${
                            filter === cat ? 'text-white border-b-2 border-white pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-300'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="hidden md:block font-mono text-xs text-gray-500">
                INDEXING {filteredProviders.length} PROVIDERS
            </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProviders.map(provider => (
                <div 
                    key={provider.id} 
                    className={`group relative bg-bg-panel border border-border hover:border-white/30 transition-all duration-300 flex flex-col ${
                        provider.isFeatured ? 'ring-1 ring-white/20' : ''
                    }`}
                >
                    {provider.isFeatured && (
                        <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-2 py-1 font-mono uppercase z-10">
                            Editor's Choice
                        </div>
                    )}
                    
                    <div className="p-8 flex-1">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                {/* Logo Container: White background ensures real brand logos pop correctly */}
                                <div className="w-12 h-12 flex items-center justify-center border border-border bg-white rounded-sm overflow-hidden p-1">
                                    <ProviderLogo name={provider.name} websiteUrl={provider.websiteUrl} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white font-heading leading-none group-hover:text-white transition-colors">{provider.name}</h3>
                                    <span className="text-xs text-gray-500 font-mono mt-1.5 block flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: provider.primaryColor }}></div>
                                        {provider.category}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-white font-mono font-medium">{provider.priceStart}</div>
                                <div className="text-[10px] text-gray-600 uppercase">Starting</div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-400 leading-relaxed mb-6 h-16 line-clamp-3">
                            {provider.description}
                        </p>

                        <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-border mb-6">
                            {provider.metrics.map((metric, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-xs font-bold text-white font-mono">{metric.value}</div>
                                    <div className="text-[10px] text-gray-600 uppercase">{metric.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {provider.features.slice(0, 3).map((feature, i) => (
                                <span key={i} className="text-[10px] border border-border text-gray-400 px-2 py-1">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>

                    <a 
                        href={provider.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="p-4 border-t border-border bg-bg hover:bg-white hover:text-black transition-colors flex items-center justify-between group-hover:pl-6 duration-300"
                    >
                        <span className="font-mono text-xs uppercase tracking-widest font-bold">Visit Website</span>
                        <ExternalLink size={14} />
                    </a>
                </div>
            ))}

            {/* CTA Card for listing */}
            <div className="border border-dashed border-border flex flex-col items-center justify-center p-8 text-center min-h-[400px] hover:border-gray-500 transition-colors cursor-pointer group">
                <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mb-4 text-gray-500 group-hover:text-white group-hover:border-white transition-all">
                    <Zap size={20} />
                </div>
                <h3 className="text-white font-bold mb-2">Are we missing one?</h3>
                <p className="text-gray-500 text-sm max-w-xs mb-6">
                    We're constantly indexing new infrastructure providers. Submit a request to add a new host.
                </p>
                <a href="mailto:submit@hostnavigator.com" className="text-xs font-mono border-b border-white pb-0.5 hover:text-gray-300 transition-colors">
                    SUBMIT LISTING
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProviderList;