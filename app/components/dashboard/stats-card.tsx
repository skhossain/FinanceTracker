'use client'

import { motion } from 'framer-motion'

interface StatsCardProps {
  title: string
  value: number
  trend?: {
    value: number
    isPositive: boolean
  }
  icon: any
  colorClass: string
}

export default function StatsCard({ title, value, trend, icon: Icon, colorClass }: StatsCardProps) {
  const formatValue = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{formatValue(value)}</p>
          {trend && (
            <div className="flex items-center mt-1">
              <span
                className={`text-sm ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '+' : '-'}{trend.value}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorClass} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${colorClass}`} />
        </div>
      </div>
    </motion.div>
  )
}
