import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricsCardProps {
  label: string;
  value: string;
  unit: string;
  trend: 'up' | 'down';
  color: 'emerald' | 'blue' | 'purple' | 'orange';
}

function MetricsCard({ label, value, unit, trend, color }: MetricsCardProps) {
  const colorClasses = {
    emerald: 'from-emerald-500 to-emerald-600',
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const trendColors = {
    up: 'text-emerald-600',
    down: 'text-red-600'
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
          {label}
        </h3>
        <div className={`p-2 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}>
          {trend === 'up' ? (
            <TrendingUp className="h-4 w-4 text-white" />
          ) : (
            <TrendingDown className="h-4 w-4 text-white" />
          )}
        </div>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
        {unit && <span className="text-sm text-gray-500">{unit}</span>}
      </div>
      <div className="mt-2 flex items-center space-x-1">
        <span className={`text-xs font-medium ${trendColors[trend]}`}>
          {trend === 'up' ? '↑' : '↓'} Better than expected
        </span>
      </div>
    </div>
  );
}

export default MetricsCard;