import React from 'react';
import UploadCard from '../components/UploadCard';
import { FileSpreadsheet, TrendingUp, CheckCircle } from 'lucide-react';

function UploadPage() {
  const sampleData = [
    { date: '2024-01-01', product_category: 'Electronics', product: 'Smartphone X1', city: 'New York', sales_demand: 150, discount: 10 },
    { date: '2024-01-02', product_category: 'Electronics', product: 'Laptop Pro', city: 'Los Angeles', sales_demand: 175, discount: 15 },
    { date: '2024-01-03', product_category: 'Clothing', product: 'Winter Jacket', city: 'Chicago', sales_demand: 220, discount: 20 },
    { date: '2024-01-04', product_category: 'Home', product: 'Smart TV', city: 'Houston', sales_demand: 190, discount: 5 }
  ];

  const requirements = [
    'CSV or Excel file format (.csv, .xlsx)',
    'Minimum 30 days of historical data',
    'Required columns: Date, Product_Category, Product, City, Sales/Demand, Discount',
    'Maximum file size: 50MB'
  ];

  return (
    <div className="min-h-screen py-12 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Upload Your Sales Data
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Upload your historical sales data to generate accurate demand forecasts. 
            Our AI will analyze patterns and provide actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <UploadCard />
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <FileSpreadsheet className="h-5 w-5 mr-2 text-blue-600" />
                File Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Data */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
                Sample Data Format
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-2 text-slate-300 font-semibold">Date</th>
                      <th className="text-left py-2 text-slate-300 font-semibold">Category</th>
                      <th className="text-left py-2 text-slate-300 font-semibold">Product</th>
                      <th className="text-left py-2 text-slate-300 font-semibold">City</th>
                      <th className="text-left py-2 text-slate-300 font-semibold">Sales</th>
                      <th className="text-left py-2 text-slate-300 font-semibold">Discount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row, index) => (
                      <tr key={index} className="border-b border-slate-700">
                        <td className="py-2 text-slate-400">{row.date}</td>
                        <td className="py-2 text-slate-400">{row.product_category}</td>
                        <td className="py-2 text-slate-400">{row.product}</td>
                        <td className="py-2 text-slate-400">{row.city}</td>
                        <td className="py-2 text-slate-400">{row.sales_demand}</td>
                        <td className="py-2 text-slate-400">{row.discount}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;