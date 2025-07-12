import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DemandForecastChartProps {
  cityData: any;
}

export default function DemandForecastChart({ cityData }: DemandForecastChartProps) {
  if (!cityData?.metrics) return null;

  const data = [
    { month: 'Jan', demand: 65, projected: 72 },
    { month: 'Feb', demand: 78, projected: 85 },
    { month: 'Mar', demand: 82, projected: 88 },
    { month: 'Apr', demand: 91, projected: 95 },
    { month: 'May', demand: 87, projected: 92 },
    { month: 'Jun', demand: 94, projected: 98 },
    { month: 'Jul', demand: 89, projected: 96 },
    { month: 'Aug', demand: 96, projected: 102 },
    { month: 'Sep', demand: 93, projected: 99 },
    { month: 'Oct', demand: 88, projected: 94 },
    { month: 'Nov', demand: 102, projected: 108 },
    { month: 'Dec', demand: 115, projected: 120 }
  ];

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="demand" stroke="#0066cc" strokeWidth={2} name="Historical Demand" />
          <Line type="monotone" dataKey="projected" stroke="#ffd700" strokeWidth={2} strokeDasharray="5 5" name="Projected Demand" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}