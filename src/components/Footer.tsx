import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-xl">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">ForecastAI</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
              Empowering businesses with AI-driven demand forecasting to optimize inventory, 
              reduce costs, and maximize profitability through data-driven insights.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>contact@forecastai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/upload" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Upload Data
              </Link>
              <Link to="/dashboard" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Dashboard
              </Link>
              <Link to="/login" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Sign In
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                About Us
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                Contact Support
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} ForecastAI. All rights reserved. Powered by advanced machine learning algorithms.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;