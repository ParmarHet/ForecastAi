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
  predictionRange: string;
}

function DashboardCharts({ selectedCity, selectedProduct, selectedCategory, selectedDiscount, predictionRange }: DashboardChartsProps) {
  const generateForecastData = () => {
    const today = new Date();
    const months = predictionRange === '1m' ? 4 : predictionRange === '3m' ? 6 : predictionRange === '6m' ? 9 : 15;
    const predictionMonths = predictionRange === '1m' ? 1 : predictionRange === '3m' ? 3 : predictionRange === '6m' ? 6 : 12;

    const data = [];
    for (let i = -(months - predictionMonths - 1); i <= predictionMonths; i++) {
      const date = new Date(today);
      date.setMonth(date.getMonth() + i);
      const monthStr = date.toISOString().slice(0, 7);

      const baseValue = 500 + Math.sin(i / 2) * 100;
      const growth = i * 20;

      if (i <= 0) {
        data.push({
          date: monthStr,
          actual: Math.round(baseValue + growth + (Math.random() * 40 - 20)),
          predicted: Math.round(baseValue + growth),
          confidence: 95 - Math.abs(i)
        });
      } else {
        data.push({
          date: monthStr,
          actual: null,
          predicted: Math.round(baseValue + growth),
          confidence: Math.max(85, 95 - i * 2)
        });
      }
    }
    return data;
  };

  const forecastData = generateForecastData();

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