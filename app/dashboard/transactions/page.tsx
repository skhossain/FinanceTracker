"use client";

import React, { useState } from 'react';
import { Transition } from '@headlessui/react'; // Ensure you have this package installed for transitions

interface Transaction {
    id: number;
    amount: string;
    category: string;
    description: string;
}

const TransactionsPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [amount, setAmount] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSaveTransaction = () => {
        // Create a new transaction object
        const newTransaction: Transaction = {
            id: transactions.length + 1, // Simple ID generation
            amount,
            category,
            description,
        };

        // Update the transactions state
        setTransactions([...transactions, newTransaction]);
        alert('Transaction saved successfully!');
        setIsOpen(false); // Close the modal after saving
        // Reset form fields
        setAmount('');
        setCategory('');
        setDescription('');
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Transactions</h1>
            <button
                onClick={() => setIsOpen(true)}
                className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
            >
                Add Transaction
            </button>

            {/* Modal */}
            <Transition
                show={isOpen}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Add New Transaction</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Amount</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Category</label>
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Enter category"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                    placeholder="Enter description"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleSaveTransaction}
                                    className="bg-blue-500 text-white rounded-md px-4 py-2"
                                >
                                    Save Transaction
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="ml-2 bg-gray-300 text-gray-700 rounded-md px-4 py-2"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Transition>

            {/* Transactions Table */}
            <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Transaction List</h2>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">${transaction.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsPage;