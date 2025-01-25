import { BellAlertIcon } from '@heroicons/react/24/outline'
import { BudgetAlert as BudgetAlertType } from '@/lib/types'

interface BudgetAlertProps {
  alert: BudgetAlertType
}

const statusStyles = {
  warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  danger: 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200',
  success: 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200',
}

const iconStyles = {
  warning: 'text-yellow-600 dark:text-yellow-400',
  danger: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
}

export default function BudgetAlert({ alert }: BudgetAlertProps) {
  return (
    <div className={`rounded-lg p-4 ${statusStyles[alert.status]}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <BellAlertIcon
            className={`h-5 w-5 ${iconStyles[alert.status]}`}
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium">{alert.category}</h3>
          <div className="mt-1 text-sm">
            <p>{alert.message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
