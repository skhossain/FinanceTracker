import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Reports</h1>
        <div className="flex space-x-4">
          <select className="rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800">
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <button className="btn-primary flex items-center space-x-2">
            <ArrowDownTrayIcon className="h-5 w-5" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Income vs Expenses Chart */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
          <div className="h-96">
            {/* Chart will go here */}
            <p className="text-gray-500">Income vs Expenses Line Chart</p>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Expense Categories</h2>
          <div className="h-96">
            {/* Chart will go here */}
            <p className="text-gray-500">Category Distribution Pie Chart</p>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Monthly Trends</h2>
          <div className="h-96">
            {/* Chart will go here */}
            <p className="text-gray-500">Monthly Trends Bar Chart</p>
          </div>
        </div>
      </div>
    </div>
  )
}
