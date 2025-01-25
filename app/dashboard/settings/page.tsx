"use client";

import React, { useState } from 'react';

const SettingsPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [notifications, setNotifications] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSave = () => {
        // Simulate saving settings
        console.log('Settings saved:', { username, email, notifications, password, confirmPassword });
        alert('Settings saved successfully!');
    };

    return (
        <div className="space-y-6 p-6">
            <h1 className="text-2xl font-bold">Settings</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">User Settings</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={() => setNotifications(!notifications)}
                                className="mr-2"
                            />
                            <span className="text-sm font-medium text-gray-700">Enable Notifications</span>
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={handleSave}
                        className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                        <input
                            type="checkbox"
                            className="mr-2"
                        />
                        <span className="text-sm font-medium text-gray-700">Enable Two-Factor Authentication</span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SettingsPage;
