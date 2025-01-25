// app/about/page.tsx
import React from "react";
import Link from "next/link";
import { API_ENDPOINTS } from '@/lib/apiendpoint';

async function fetchAboutData() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}${API_ENDPOINTS.ABOUT}`;
  const response = await fetch(url, {
    cache: "no-store", // Fetch fresh data on every request
  });

  if (!response.ok) {
    throw new Error("Failed to fetch About data");
  }

  return response.json();
}

const AboutPage = async () => {
  const aboutData = await fetchAboutData();

  return (
    <div className="mx-auto p-6 bg-gradient-to-r from-blue-100 via-gray-50 to-blue-100 rounded-xl shadow-lg">
      <div
        className="h-80 bg-cover bg-center rounded-xl mb-8 relative"
        style={{
          backgroundImage: `url(${aboutData.heroImage || "https://images.pexels.com/photos/4386482/pexels-photo-4386482.jpeg"})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
        <h1 className="text-5xl font-extrabold text-white text-center relative z-10 p-6">{aboutData.title}</h1>
        <p className="text-xl text-white text-center relative z-10 mt-4">{aboutData.subtitle}</p>
      </div>
      
      <div className="text-center mb-10">
        <p className="text-lg text-gray-700 mb-6">{aboutData.intro.content}</p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">{aboutData.intro.heading}</h2>
      </div>

      <div className="space-y-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {aboutData.features.map((feature: { title: string; description: string }, index: number) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{aboutData.callToAction.heading}</h3>
        <p className="text-lg text-gray-700 mb-6">{aboutData.callToAction.content}</p>
        <Link
          href={aboutData.callToAction.buttonLink}
          className="bg-blue-600 text-white text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg"
        >
          {aboutData.callToAction.buttonText}
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutData.additionalImages.map((image: string, index: number) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img src={image} alt={`About image ${index + 1}`} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
