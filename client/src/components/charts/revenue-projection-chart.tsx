import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface RevenueProjectionChartProps {
  cityData: any;
}

const COLORS = ['#0066cc', '#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1'];

export default function RevenueProjectionChart({ cityData }: RevenueProjectionChartProps) {
  if (!cityData?.metrics) return null;

  const data = [
    { name: 'Groceries', value: 45, revenue: 2.8 },
    { name: 'Electronics', value: 28, revenue: 1.9 },
    { name: 'Apparel', value: 18, revenue: 1.2 },
    { name: 'Home & Garden', value: 6, revenue: 0.4 },
    { name: 'Others', value: 3, revenue: 0.2 }
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: any, name: string) => [`${value}%`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}