'use client'

import StatsCard from '../components/dashboard/stats-card'
import {
  BanknotesIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline'

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { API_ENDPOINTS } from '@/lib/apiendpoint';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardPage() {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [summary, setSummary] = React.useState<{
    monthlyIncome: number
    monthlyExpenses: number
    savings: number
    budgetAlerts: { category: string; status: 'warning' | 'danger'; message: string }[]
  } | undefined | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
      const url = `${NEXT_PUBLIC_API_URL}${API_ENDPOINTS.TRANSECTIONS_SUMMARY}`
      
        const response = await fetch(url)
        if (!response.ok) throw new Error('Network response was not ok')
        const data = await response.json()
        setSummary(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        setSummary(null) // Set summary to null in case of error
      }
    }
    fetchData()
  }, [])

  // Income vs Expenses Data
  const incomeVsExpensesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Income',
        data: [3000, 2500, 4000, 3500, 3000, 4500, 5000],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Expenses',
        data: [2000, 1500, 2500, 2000, 1800, 3000, 3200],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // Spending by Category Data
  const spendingByCategoryData = {
    labels: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Healthcare'],
    datasets: [
      {
        label: 'Spending by Category',
        data: [500, 300, 200, 400, 250],
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
      },
    ],
  };

  if (summary === null) {
    return <div>Error loading data...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {summary && 
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Monthly Income"
          value={summary.monthlyIncome}
          trend={{ value: 12, isPositive: true }}
          icon={BanknotesIcon}
          colorClass="text-green-600"
        />
        <StatsCard
          title="Monthly Expenses"
          value={summary.monthlyExpenses}
          trend={{ value: 8, isPositive: false }}
          icon={CreditCardIcon}
          colorClass="text-red-600"
        />
        <StatsCard
          title="Total Savings"
          value={summary.savings}
          trend={{ value: 4, isPositive: true }}
          icon={BuildingLibraryIcon}
          colorClass="text-primary-600"
        />
        <StatsCard
          title="Budget Alerts"
          value={0}
          icon={BellAlertIcon}
          colorClass="text-yellow-600"
        />
      </div>
      }
      

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Financial Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Income vs Expenses</h3>
            <Bar data={incomeVsExpensesData} />
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-sm font-medium text-gray-600 mb-4">Spending by Category</h3>
            <Bar data={spendingByCategoryData} />
          </div>
        </div>
      </div>
    </div>
  )
}
