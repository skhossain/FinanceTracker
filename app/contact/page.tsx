import React from 'react';
import Link from 'next/link';
import { API_ENDPOINTS } from '@/lib/apiendpoint';

async function fetchContactData() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.CONTACT}`;
  const response = await fetch(url, {
    cache: 'no-store', // Fetch fresh data on every request
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Contact data');
  }

  return response.json();
}

const ContactPage = async () => {
  const contactData = await fetchContactData();

  return (
    <div className="mx-auto p-6 bg-gradient-to-r from-blue-100 via-gray-50 to-blue-100 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-center mb-4">{contactData.title}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <input type="text" placeholder={contactData.form.namePlaceholder} className="border border-gray-300 p-2 w-full rounded" required />
        </div>
        <div className="mb-4">
          <input type="email" placeholder={contactData.form.emailPlaceholder} className="border border-gray-300 p-2 w-full rounded" required />
        </div>
        <div className="mb-4">
          <textarea placeholder={contactData.form.messagePlaceholder} className="border border-gray-300 p-2 w-full rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300 ease-in-out">{contactData.form.submitButtonText}</button>
      </form>
      <div className='px-4'>
        <h2 className="text-3xl font-semibold text-center mb-2">{contactData.subtitle}</h2>
        <p className="text-lg text-gray-700 text-center mb-6">{contactData.intro.content}</p>
        <div className="text-center mb-6">
            <p className="text-lg text-gray-700 mb-2">Email: {contactData.contactInfo.email}</p>
            <p className="text-lg text-gray-700 mb-2">Phone: {contactData.contactInfo.phone}</p>
            <p className="text-lg text-gray-700 mb-2">Address: {contactData.contactInfo.address}</p>
        </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{contactData.callToAction.heading}</h3>
        <p className="text-lg text-gray-700 mb-6">{contactData.callToAction.content}</p>
        <Link href="/auth/register" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Get Started</Link>
      </div>
    </div>
  );
};

export default ContactPage;
