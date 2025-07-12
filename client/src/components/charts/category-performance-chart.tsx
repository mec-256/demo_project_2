import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

interface CategoryPerformanceChartProps {
  cityData: any;
}

export default function CategoryPerformanceChart({ cityData }: CategoryPerformanceChartProps) {
  if (!cityData?.metrics) return null;

  const data = [
    { subject: 'Groceries', performance: 85, market: 90 },
    { subject: 'Electronics', performance: 78, market: 85 },
    { subject: 'Apparel', performance: 72, market: 80 },
    { subject: 'Home & Garden', performance: 68, market: 75 },
    { subject: 'Health & Beauty', performance: 74, market: 82 },
    { subject: 'Sports & Outdoors', performance: 66, market: 70 }
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis domain={[0, 100]} />
          <Radar name="Current Performance" dataKey="performance" stroke="#0066cc" fill="#0066cc" fillOpacity={0.6} />
          <Radar name="Market Potential" dataKey="market" stroke="#ffd700" fill="#ffd700" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}