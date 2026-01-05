import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8">
            <div className="inline-block border-b border-white pb-1 mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-white">The Infrastructure Directory</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-white mb-8">
                Curated <span className="text-gray-500">Cloud</span> <br/>
                Hosting Excellence.
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                A definitive guide to the world's highest performance server infrastructure. 
                We index, benchmark, and categorize hosting providers so you don't have to.
            </p>
            
            <div className="flex flex-wrap gap-4">
                <a href="#directory" className="bg-white text-black font-semibold px-8 py-3 hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Browse Directory <ArrowDownRight size={18} />
                </a>
                <a href="#methodology" className="border border-border text-gray-300 font-mono text-sm px-8 py-3 hover:border-white hover:text-white transition-colors flex items-center">
                    View Methodology
                </a>
            </div>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="border border-border p-6 bg-bg-panel">
                <div className="font-mono text-xs text-gray-500 mb-4 border-b border-border pb-2 flex justify-between">
                    <span>LATEST BENCHMARK</span>
                    <span>12.4.2023</span>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-white">Kinsta WP</span>
                        <div className="w-32 h-2 bg-gray-800 rounded-sm overflow-hidden">
                            <div className="h-full bg-white w-[98%]"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-400">AWS EC2</span>
                        <div className="w-32 h-2 bg-gray-800 rounded-sm overflow-hidden">
                            <div className="h-full bg-gray-600 w-[85%]"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-400">DigitalOcean</span>
                        <div className="w-32 h-2 bg-gray-800 rounded-sm overflow-hidden">
                            <div className="h-full bg-gray-600 w-[90%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;