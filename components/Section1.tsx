"use client";

import Image from "next/image";
import Link from "next/link";

// Helper function to show "time ago"
function timeAgo(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (let i in intervals) {
    const count = Math.floor(seconds / intervals[i]);
    if (count >= 1) return `${count} ${i}${count > 1 ? "s" : ""} ago`;
  }

  return "Just now";
}

export default function MostViewedNews() {
  // Dummy Data with views
  const allArticles = [
    {
      id: 1,
      title: "East Java Leads the Way in Sustainable Innovation",
      image: "/images/sample1.jpg",
      uploadedAt: "2025-11-15T08:00:00Z",
      views: 1200,
    },
    {
      id: 2,
      title: "Local Startups Drive Renewable Energy Solutions",
      image: "/images/sample2.jpg",
      uploadedAt: "2025-11-16T10:30:00Z",
      views: 1800,
    },
    {
      id: 3,
      title: "University Researchers Develop Eco-Friendly Materials",
      image: "/images/sample3.jpg",
      uploadedAt: "2025-11-17T12:00:00Z",
      views: 950,
    },
    {
      id: 4,
      title: "Innovation Hubs in Surabaya Encourage Tech Growth",
      image: "/images/sample4.jpg",
      uploadedAt: "2025-11-17T14:20:00Z",
      views: 2000,
    },
    {
      id: 5,
      title: "East Java Government Launches Science Funding Program",
      image: "/images/sample5.jpg",
      uploadedAt: "2025-11-18T07:00:00Z",
      views: 850,
    },
  ];

  // Sort by views descending and take top 4
  const topArticles = allArticles
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  return (
    <div className="w-full bg-gray-50 py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Most Viewed News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topArticles.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 transition-colors duration-300 hover:text-orange-500">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{timeAgo(item.uploadedAt)}</p>
              <p className="text-gray-500 text-xs mt-1">{item.views} views</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/news/explore"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md transition"
        >
          Explore All News
        </Link>
      </div>
    </div>
  );
}
