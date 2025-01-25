import React from 'react';
import Link from 'next/link';
import { API_ENDPOINTS } from '@/lib/apiendpoint';

async function fetchPrivacyData() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.PRIVACY}`;
  const response = await fetch(url, {
    cache: 'no-store', // Fetch fresh data on every request
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Privacy data');
  }

  return response.json();
}

const PrivacyPage = async () => {
  const privacyData = await fetchPrivacyData();

  return (
    <div className="mx-auto p-6 bg-gradient-to-r from-blue-100 via-gray-50 to-blue-100 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-center mb-4">{privacyData.title}</h1>
      <h2 className="text-3xl font-semibold text-center mb-2">{privacyData.subtitle}</h2>
      <p className="text-lg text-gray-700 text-center mb-6">{privacyData.intro.content}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {privacyData.privacyPractices.map((practice: { title: string; description: string }, index: number) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md h-full">
            <h3 className="text-xl font-semibold text-gray-800">{practice.title}</h3>
            <p className="text-gray-600">{practice.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{privacyData.userRights.heading}</h2>
        <p className="text-lg text-gray-700 mb-6">{privacyData.userRights.content}</p>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{privacyData.callToAction.heading}</h3>
        <p className="text-lg text-gray-700 mb-6">{privacyData.callToAction.content}</p>
        <Link href="/auth/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Get Started</Link>
      </div>
      </div>
  );
};

export default PrivacyPage;
