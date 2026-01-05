import React from 'react';
import { Target, BarChart3, ShieldCheck, Zap } from 'lucide-react';

const Features: React.FC = () => {
  const metrics = [
    {
      icon: Zap,
      title: "Performance",
      desc: "TTFB, Load Testing, & Uptime monitoring."
    },
    {
      icon: ShieldCheck,
      title: "Security",
      desc: "Firewall analysis, DDoS mitigation, and compliance."
    },
    {
      icon: Target,
      title: "Usability",
      desc: "Dashboard UX, API quality, and documentation."
    },
    {
      icon: BarChart3,
      title: "Value",
      desc: "Price-to-performance ratios and scaling costs."
    }
  ];

  return (
    <section id="methodology" className="py-20 border-b border-border bg-bg-panel scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="font-heading text-3xl font-bold text-white mb-6">
                    Our Ranking Methodology
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    HostNavigator isn't just a list. It's a rigorous analysis of the cloud infrastructure market. We deploy test instances on every provider listed to verify their claims.
                </p>
                <button className="text-white border-b border-white pb-1 text-sm font-mono hover:text-gray-300 transition-colors">
                    READ THE FULL REPORT
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {metrics.map((m, i) => (
                    <div key={i} className="flex gap-4">
                        <m.icon className="text-white shrink-0" size={24} strokeWidth={1.5} />
                        <div>
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{m.title}</h4>
                            <p className="text-sm text-gray-500">{m.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;