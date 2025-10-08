import React, { useState } from 'react';
import DashboardCharts from '../components/DashboardCharts';
import { Download, Filter, Calendar, MapPin, Package, Percent, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDiscount, setSelectedDiscount] = useState('all');
  const [dateRange, setDateRange] = useState('30d');
  const [hasUploadedData, setHasUploadedData] = useState(false); // Simulate user data status

  const cities = ['all', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const products = ['all', 'Product A', 'Product B', 'Product C', 'Product D'];
  const categories = ['all', 'Electronics', 'Clothing', 'Home', 'Sports'];
  const discounts = ['all', '0-10%', '11-20%', '21-30%', '30%+'];

  const handleDownload = () => {
    // Simulate file download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'demand_forecast_report.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 animate-fade-in-up">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Forecast Dashboard
            </h1>
            <p className="text-slate-300">
              AI-generated insights based on your uploaded data
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 pulse-glow"
            >
              <Download className="h-5 w-5" />
              <span>Download Forecast</span>
            </button>
          </div>
        </div>

        {!hasUploadedData ? (
          /* No Data Message */
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-12 text-center animate-fade-in-up">
            <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-white mb-4">No Data Available</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              You haven't uploaded any sales data yet. To generate accurate demand forecasts and view analytics, 
              please upload your historical sales data first.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/upload'}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 pulse-glow"
              >
                Upload Data Now
              </button>
              <button
                onClick={() => setHasUploadedData(true)}
                className="border-2 border-slate-600 text-slate-300 px-8 py-3 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Load Sample Data
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700/50 p-6 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="h-5 w-5 text-slate-300" />
                <h3 className="text-lg font-semibold text-white">Filters</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Date Range
                  </label>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
                    <option value="90d">Last 90 days</option>
                    <option value="1y">Last year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    City
                  </label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {cities.map(city => (
                      <option key={city} value={city}>
                        {city === 'all' ? 'All Cities' : city}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                    <Package className="h-4 w-4 mr-1" />
                    Product
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {products.map(product => (
                      <option key={product} value={product}>
                        {product === 'all' ? 'All Products' : product}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                    <Percent className="h-4 w-4 mr-1" />
                    Discount
                  </label>
                  <select
                    value={selectedDiscount}
                    onChange={(e) => setSelectedDiscount(e.target.value)}
                    className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  >
                    {discounts.map(discount => (
                      <option key={discount} value={discount}>
                        {discount === 'all' ? 'All Discounts' : discount}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Charts */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <DashboardCharts 
                selectedCity={selectedCity}
                selectedProduct={selectedProduct}
                selectedCategory={selectedCategory}
                selectedDiscount={selectedDiscount}
                dateRange={dateRange}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;