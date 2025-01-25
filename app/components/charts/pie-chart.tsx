import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
  data: ChartData<'pie'>
  options?: ChartOptions<'pie'>
  className?: string
}

export default function PieChart({ data, options, className }: PieChartProps) {
  const defaultOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
      },
    },
  }

  return (
    <div className={className}>
      <Pie data={data} options={options || defaultOptions} />
    </div>
  )
}
