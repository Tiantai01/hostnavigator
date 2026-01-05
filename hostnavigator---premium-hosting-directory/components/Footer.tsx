import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-border text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-2 h-2 bg-black"></div>
                </div>
                <span className="font-heading font-bold text-white text-lg">HostNavigator</span>
            </div>
            <p className="text-gray-500 mb-6 max-w-xs">
              The premier directory for cloud infrastructure. We help developers and CTOs find the perfect environment for their applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#Managed%20WP" className="hover:text-white transition-colors">WordPress Hosting</a></li>
              <li><a href="#Cloud%20VPS" className="hover:text-white transition-colors">Cloud VPS</a></li>
              <li><a href="#Database" className="hover:text-white transition-colors">Database Hosting</a></li>
              <li><a href="#Serverless" className="hover:text-white transition-colors">Serverless</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="#methodology" className="hover:text-white transition-colors">Benchmark Reports</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Uptime Tracker</a></li>
              <li><a href="mailto:deals@hostnavigator.com" className="hover:text-white transition-colors">Deal Alerts</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-gray-500">
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">Methodology</a></li>
              <li><a href="mailto:ads@hostnavigator.com" className="hover:text-white transition-colors">Advertising</a></li>
              <li><a href="mailto:contact@hostnavigator.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            © 2024 HostNavigator Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-600">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;