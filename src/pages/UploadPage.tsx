import React from 'react';
import UploadCard from '../components/UploadCard';
import { FileSpreadsheet, TrendingUp, CheckCircle } from 'lucide-react';

function UploadPage() {
  const sampleData = [
    { date: '2024-01-01', product: 'Product A', region: 'North', demand: 150 },
    { date: '2024-01-02', product: 'Product A', region: 'North', demand: 175 },
    { date: '2024-01-03', product: 'Product B', region: 'South', demand: 220 },
    { date: '2024-01-04', product: 'Product C', region: 'East', demand: 190 }
  ];

  const requirements = [
    'CSV or Excel file format (.csv, .xlsx)',
    'Minimum 30 days of historical data',
    'Required columns: Date, Product, Region, Demand',
    'Maximum file size: 50MB'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upload Your Sales Data
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your historical sales data to generate accurate demand forecasts. 
            Our AI will analyze patterns and provide actionable insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <UploadCard />
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            {/* Requirements */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileSpreadsheet className="h-5 w-5 mr-2 text-blue-600" />
                File Requirements
              </h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample Data */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-emerald-600" />
                Sample Data Format
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-700 font-semibold">Date</th>
                      <th className="text-left py-2 text-gray-700 font-semibold">Product</th>
                      <th className="text-left py-2 text-gray-700 font-semibold">Region</th>
                      <th className="text-left py-2 text-gray-700 font-semibold">Demand</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-2 text-gray-600">{row.date}</td>
                        <td className="py-2 text-gray-600">{row.product}</td>
                        <td className="py-2 text-gray-600">{row.region}</td>
                        <td className="py-2 text-gray-600">{row.demand}</td>
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