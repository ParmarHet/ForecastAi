import React, { useState } from 'react';
import DashboardCharts from '../components/DashboardCharts';
import MetricsCard from '../components/MetricsCard';
import { Download, Filter, Calendar, MapPin, Package } from 'lucide-react';

function Dashboard() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [dateRange, setDateRange] = useState('30d');

  const metrics = [
    { label: 'MAE', value: '12.4', unit: 'units', trend: 'down', color: 'emerald' },
    { label: 'RMSE', value: '18.7', unit: 'units', trend: 'down', color: 'blue' },
    { label: 'R²', value: '0.94', unit: '', trend: 'up', color: 'purple' },
    { label: 'WAPE', value: '8.3%', unit: '', trend: 'down', color: 'orange' }
  ];

  const regions = ['all', 'North', 'South', 'East', 'West'];
  const products = ['all', 'Product A', 'Product B', 'Product C', 'Product D'];

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
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Forecast Dashboard
            </h1>
            <p className="text-gray-600">
              AI-generated insights based on your uploaded data
            </p>
          </div>
          <div className="mt-4 lg:mt-0">
            <button
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="h-5 w-5" />
              <span>Download Forecast</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'All Regions' : region}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Package className="h-4 w-4 mr-1" />
                Product
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {products.map(product => (
                  <option key={product} value={product}>
                    {product === 'all' ? 'All Products' : product}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts */}
        <DashboardCharts 
          selectedRegion={selectedRegion}
          selectedProduct={selectedProduct}
          dateRange={dateRange}
        />
      </div>
    </div>
  );
}

export default Dashboard;