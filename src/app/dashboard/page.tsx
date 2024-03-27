import LineChart from '@/app/dashboard/line-chart';

function BarChart() {
  return <h2>Bar Chart</h2>;
}

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <BarChart />
      <LineChart />
    </>
  );
}
