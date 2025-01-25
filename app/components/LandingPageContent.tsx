'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChartBarIcon, WalletIcon, ChartPieIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Smart Expense Tracking',
    description: 'Automatically categorize and track your expenses with our intelligent system.',
    icon: ChartBarIcon,
    image: '/images/feature-expense.svg'
  },
  {
    title: 'Budget Management',
    description: 'Create and manage budgets to keep your spending in check.',
    icon: WalletIcon,
    image: '/images/feature-budget.svg'
  },
  {
    title: 'Financial Analytics',
    description: 'Get insights into your spending patterns with detailed analytics.',
    icon: ChartPieIcon,
    image: '/images/feature-analytics.svg'
  },
]

export default function LandingPageContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mb-10 lg:mb-0"
            >
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Smart Finance Management for a Better Future
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Take control of your finances with our intuitive tools and insights. Track expenses, set budgets, and achieve your financial goals.
              </p>
              <div className="space-x-4">
                <Link 
                  href="/auth/register" 
                  className="btn-primary"
                >
                  Get Started Free
                </Link>
                <Link 
                  href="/auth/login" 
                  className="btn-secondary"
                >
                  Sign In
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <img 
                src="/hero-image.svg" 
                alt="Financial Management Dashboard" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
            <p className="text-xl mb-8">Join thousands of users who are already managing their finances smarter.</p>
            <Link 
              href="/auth/register" 
              className="btn-white"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
