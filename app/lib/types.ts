export type Transaction = {
  id: string
  date: string
  description: string
  category: string
  amount: number
  type: 'income' | 'expense'
}

export type BudgetAlert = {
  category: string
  status: 'warning' | 'danger' | 'success'
  message: string
}

export type Summary = {
  monthlyIncome: number
  monthlyExpenses: number
  savings: number
  budgetAlerts: BudgetAlert[]
}

export type TransactionData = {
  transactions: Transaction[]
  summary: Summary
}
