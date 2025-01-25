'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  HomeIcon,
  BanknotesIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Transactions', href: '/dashboard/transactions', icon: BanknotesIcon },
  { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: Cog6ToothIcon },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary-600">PF Manager</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                  isActive
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link
            href="/auth/login"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-primary-600 hover:bg-gray-50"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  )
}
