import { useState } from 'react'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Select from '@/components/ui/select'
import { Transaction } from '@/lib/types'

interface TransactionFormProps {
  onSubmit: (data: Omit<Transaction, 'id'>) => void
  onCancel: () => void
  initialData?: Transaction
}

const categoryOptions = [
  { value: 'Food', label: 'Food' },
  { value: 'Transportation', label: 'Transportation' },
  { value: 'Utilities', label: 'Utilities' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Income', label: 'Income' },
  { value: 'Other', label: 'Other' },
]

const typeOptions = [
  { value: 'income', label: 'Income' },
  { value: 'expense', label: 'Expense' },
]

export default function TransactionForm({
  onSubmit,
  onCancel,
  initialData,
}: TransactionFormProps) {
  const [formData, setFormData] = useState({
    date: initialData?.date || new Date().toISOString().split('T')[0],
    description: initialData?.description || '',
    category: initialData?.category || '',
    amount: initialData?.amount ? Math.abs(initialData.amount).toString() : '',
    type: initialData?.type || 'expense',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = parseFloat(formData.amount)
    onSubmit({
      ...formData,
      amount: formData.type === 'expense' ? -amount : amount,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Date"
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />

      <Input
        label="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />

      <Select
        label="Category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        options={categoryOptions}
        required
      />

      <Select
        label="Type"
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value as 'income' | 'expense' })}
        options={typeOptions}
        required
      />

      <Input
        label="Amount"
        type="number"
        min="0"
        step="0.01"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? 'Update' : 'Add'} Transaction
        </Button>
      </div>
    </form>
  )
}
