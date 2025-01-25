import { Metadata } from 'next';
import LandingPageContent from '@/components/LandingPageContent';

export const metadata: Metadata = {
  title: 'Personal Finance Management - Take Control of Your Money',
  description: 'Track your expenses, manage budgets, and achieve your financial goals with our powerful personal finance management tool.',
  keywords: 'personal finance, money management, budget tracking, expense management, financial planning',
};

const LandingPage = () => {
  return (
    <main>
      <LandingPageContent />
    </main>
  );
};

export default LandingPage;
