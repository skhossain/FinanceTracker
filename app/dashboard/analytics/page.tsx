"use client";

import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const AnalyticsPage = () => {
    // Sample data for the charts
    const lineChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Cost Over Time',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const barChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

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

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Cost Over Time</h2>
                    <Line data={lineChartData} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Votes by Color</h2>
                    <Bar data={barChartData} />
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-semibold">Income vs Expenses</h2>
                    <Bar data={incomeVsExpensesData} />
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;