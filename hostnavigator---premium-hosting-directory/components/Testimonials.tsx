import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-kinsta-border bg-kinsta-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
                 <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by 120,000+ <br/> companies worldwide.
                </h2>
                <div className="flex gap-8 opacity-50 grayscale mt-8">
                     {/* Placeholder logos using text for simplicity but styled professionally */}
                     <span className="text-xl font-bold font-heading text-white">UBISOFT</span>
                     <span className="text-xl font-bold font-heading text-white">TripAdvisor</span>
                     <span className="text-xl font-bold font-heading text-white">FreshBooks</span>
                </div>
            </div>
            <div className="flex gap-4">
                 <div className="p-6 bg-kinsta-panel rounded-lg border border-kinsta-border flex-1 text-center">
                    <div className="text-4xl font-bold text-kinsta-accent mb-2">37%</div>
                    <div className="text-sm text-gray-400">Faster load times</div>
                 </div>
                 <div className="p-6 bg-kinsta-panel rounded-lg border border-kinsta-border flex-1 text-center">
                    <div className="text-4xl font-bold text-kinsta-accent mb-2">98%</div>
                    <div className="text-sm text-gray-400">CSAT Score</div>
                 </div>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bg-[#121214] p-10 rounded-xl relative border border-white/5 hover:border-white/10 transition-colors">
              <Quote className="absolute top-10 left-10 text-kinsta-primary/20 w-12 h-12 -z-0" />
              <p className="relative z-10 text-lg text-gray-200 leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10" />
                <div>
                  <div className="text-white font-bold text-sm">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;