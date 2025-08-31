export const generateSampleForecastData = (days: number = 30) => {
  const data = [];
  const startDate = new Date('2024-01-01');
  
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    const baseValue = 400 + Math.sin(i * 0.1) * 50;
    const actual = i < days - 7 ? Math.round(baseValue + Math.random() * 40 - 20) : null;
    const predicted = Math.round(baseValue + Math.random() * 20 - 10);
    
    data.push({
      date: date.toISOString().split('T')[0],
      actual,
      predicted,
      confidence: Math.round(85 + Math.random() * 10)
    });
  }
  
  return data;
};

export const generateRegionData = () => [
  { region: 'North America', demand: 2450, forecast: 2680, growth: 9.4 },
  { region: 'Europe', demand: 1980, forecast: 2150, growth: 8.6 },
  { region: 'Asia Pacific', demand: 3200, forecast: 3520, growth: 10.0 },
  { region: 'Latin America', demand: 860, forecast: 950, growth: 10.5 },
  { region: 'Middle East', demand: 640, forecast: 720, growth: 12.5 }
];

export const generateProductData = () => [
  { name: 'Enterprise Software', value: 35, color: '#3B82F6', revenue: '$2.4M' },
  { name: 'Consumer Electronics', value: 28, color: '#10B981', revenue: '$1.8M' },
  { name: 'Healthcare Devices', value: 22, color: '#8B5CF6', revenue: '$1.4M' },
  { name: 'Automotive Parts', value: 15, color: '#F59E0B', revenue: '$980K' }
];