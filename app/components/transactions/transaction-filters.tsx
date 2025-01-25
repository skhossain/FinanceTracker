import Input from '@/components/ui/input'
import Select from '@/components/ui/select'

interface TransactionFiltersProps {
  onSearchChange: (value: string) => void
  onCategoryChange: (value: string) => void
  onTypeChange: (value: string) => void
  search: string
  category: string
  type: string
}

const categoryOptions = [
  { value: '', label: 'All Categories' },
  { value: 'Food', label: 'Food' },
  { value: 'Transportation', label: 'Transportation' },
  { value: 'Utilities', label: 'Utilities' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Income', label: 'Income' },
  { value: 'Other', label: 'Other' },
]

const typeOptions = [
  { value: '', label: 'All Types' },
  { value: 'income', label: 'Income' },
  { value: 'expense', label: 'Expense' },
]

export default function TransactionFilters({
  onSearchChange,
  onCategoryChange,
  onTypeChange,
  search,
  category,
  type,
}: TransactionFiltersProps) {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
      <div className="flex-1">
        <Input
          placeholder="Search transactions..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="w-full sm:w-48">
        <Select
          options={categoryOptions}
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        />
      </div>
      <div className="w-full sm:w-48">
        <Select
          options={typeOptions}
          value={type}
          onChange={(e) => onTypeChange(e.target.value)}
        />
      </div>
    </div>
  )
}
