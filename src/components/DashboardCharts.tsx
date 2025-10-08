import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface DashboardChartsProps {
  selectedCity: string;
  selectedProduct: string;
  selectedCategory: string;
  selectedDiscount: string;
  dateRange: string;
}

function DashboardCharts({ selectedCity, selectedProduct, selectedCategory, selectedDiscount, dateRange }: DashboardChartsProps) {
  // Sample forecast data
  const forecastData = [
    { date: '2024-01', actual: 450, predicted: 442, confidence: 95 },
    { date: '2024-02', actual: 520, predicted: 518, confidence: 94 },
    { date: '2024-03', actual: 580, predicted: 575, confidence: 96 },
    { date: '2024-04', actual: 620, predicted: 615, confidence: 93 },
    { date: '2024-05', actual: null, predicted: 680, confidence: 91 },
    { date: '2024-06', actual: null, predicted: 720, confidence: 89 },
    { date: '2024-07', actual: null, predicted: 765, confidence: 87 }
  ];

  const cityData = [
    { city: 'New York', demand: 1250, forecast: 1320 },
    { city: 'Los Angeles', demand: 980, forecast: 1050 },
    { city: 'Chicago', demand: 1180, forecast: 1240 },
    { city: 'Houston', demand: 860, forecast: 920 },
    { city: 'Phoenix', demand: 740, forecast: 810 }
  ];

  const categoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 28, color: '#10B981' },
    { name: 'Home', value: 22, color: '#8B5CF6' },
    { name: 'Sports', value: 15, color: '#F59E0B' }
  ];

  return (
    <div className="space-y-8">
      {/* Main Forecast Chart */}
      <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Actual vs Predicted Demand</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={forecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis 
                dataKey="date" 
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  color: '#e2e8f0'
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                name="Actual Demand"
              />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="#10B981"
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                name="Predicted Demand"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* City Demand Chart */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Demand by City</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={cityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis 
                  dataKey="city" 
                  stroke="#94A3B8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#94A3B8"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    color: '#e2e8f0'
                  }}
                />
                <Legend />
                <Bar dataKey="demand" fill="#3B82F6" name="Current Demand" radius={[4, 4, 0, 0]} />
                <Bar dataKey="forecast" fill="#10B981" name="Forecasted Demand" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-700/50 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Category Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #475569',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    color: '#e2e8f0'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCharts;