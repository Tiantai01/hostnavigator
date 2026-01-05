import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProviderList from './components/ProviderList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProviderList />
        
        {/* Newsletter / CTA */}
        <section className="py-24 border-t border-border">
            <div className="max-w-xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">
                    Weekly Infrastructure Intelligence
                </h2>
                <p className="text-gray-500 mb-8">
                    Get the latest benchmarks, downtime reports, and industry news delivered to your inbox.
                </p>
                <div className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="email@company.com" 
                        className="bg-bg-panel border border-border px-4 py-3 w-full text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-gray-700"
                    />
                    <button className="bg-white text-black font-bold px-6 py-3 text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;