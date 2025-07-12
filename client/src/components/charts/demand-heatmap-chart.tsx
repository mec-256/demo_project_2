import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface DemandHeatmapChartProps {
  cityData: any;
}

export default function DemandHeatmapChart({ cityData }: DemandHeatmapChartProps) {
  if (!cityData?.metrics) return null;

  const data = [
    { zone: 'Central', high: cityData.metrics.demandHigh, medium: cityData.metrics.demandMedium, low: cityData.metrics.demandLow },
    { zone: 'North', high: 38, medium: 42, low: 20 },
    { zone: 'South', high: 52, medium: 28, low: 20 },
    { zone: 'East', high: 41, medium: 39, low: 20 },
    { zone: 'West', high: 48, medium: 32, low: 20 }
  ];

  const getBarColor = (value: number) => {
    if (value >= 50) return '#ff4444';
    if (value >= 35) return '#ffd700';
    return '#4ecdc4';
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="zone" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="high" name="High Demand" fill="#ff4444" />
          <Bar dataKey="medium" name="Medium Demand" fill="#ffd700" />
          <Bar dataKey="low" name="Low Demand" fill="#4ecdc4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}