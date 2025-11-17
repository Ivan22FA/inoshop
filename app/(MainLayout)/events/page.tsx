"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Dummy Event Data Config
const eventInfo = {
  title: "{eventInfo.title}",
  dateLabel: "June 15, 2026",
  location: "Surabaya, INDONESIA",
  day: "15",
  month: "June",
  place: "BRIDA JATIM, Surabaya",
  eventDate: new Date("2026-06-15T10:00:00"),
};

export default function EventPage() {
  const eventDate = eventInfo.eventDate;
  const [countdown, setCountdown] = useState([
    { label: "Days", value: 0 },
    { label: "Hours", value: 0 },
    { label: "Minutes", value: 0 },
    { label: "Seconds", value: 0 },
  ]);

  useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date();
      const distance = eventDate.getTime() - now.getTime();

      if (distance <= 0) {
        setCountdown([
          { label: "Days", value: 0 },
          { label: "Hours", value: 0 },
          { label: "Minutes", value: 0 },
          { label: "Seconds", value: 0 },
        ]);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown([
        { label: "Days", value: days },
        { label: "Hours", value: hours },
        { label: "Minutes", value: minutes },
        { label: "Seconds", value: seconds },
      ]);
    }, 1000);

    return () => clearInterval(tick);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full flex items-center justify-center bg-black">
        <Image
          src="/images/Event1.jpg"
          alt="Event Background"
          fill
          className="object-cover opacity-50"
        />

        <div className="relative text-center max-w-3xl px-4 text-white">
          <p className="uppercase tracking-widest text-sm mb-3 text-gray-200">
            Join the Business Momentum!
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Temu Bisnis <br /> BRIDA JATIM 2025
          </h1>

          <p className="mb-6 text-gray-200">
            {eventInfo.dateLabel} • {eventInfo.location}
          </p>

          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg rounded-md shadow-lg">
            Register Now
          </Button>
        </div>
      </section>

      {/* COUNTDOWN BOX */}
      <section className="relative -mt-20 w-full flex justify-center z-20 px-4">
        <div
          className="bg-white text-gray-900 shadow-2xl rounded-xl p-8 w-full max-w-5xl 
        grid grid-cols-1 md:grid-cols-5 gap-6 border-t-4 border-pink-600"
        >
          {/* Date Section */}
          <div className="flex flex-col justify-center items-center border-r md:border-r-2 border-gray-200 md:pr-6">
            <h2 className="text-4xl font-bold text-pink-600">{eventInfo.day}</h2>
            <p className="uppercase text-sm tracking-wider">{eventInfo.month}</p>
            <p className="text-xs text-gray-500">{eventInfo.place}</p>
          </div>

          {/* Countdown Items */}
          {countdown.map((c, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <div
                className="text-3xl font-bold border-4 rounded-full w-24 h-24 flex items-center justify-center"
                style={{
                  borderColor: ["#7C3AED", "#F59E0B", "#3B82F6", "#10B981"][i],
                }}
              >
                {c.value}
              </div>
              <p className="mt-2 text-gray-600 text-sm uppercase">{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section className="max-w-5xl mx-auto px-6 pb-10 pt-32 text-gray-800">

        <h2 className="text-3xl font-bold mb-6 text-center">Event Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-3">About The Event</h3>
            <p className="text-gray-700 leading-relaxed">
              This creative business conference brings together leaders,
              innovators, and professionals from all over the world. Learn
              powerful strategies, discover upcoming industry trends, and
              network with top experts.
            </p>
          </div>

          {/* What You Will Learn */}
          <div>
            <h3 className="text-xl font-semibold mb-3">What You Will Learn</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Modern business innovation techniques</li>
              <li>Creative marketing and branding strategies</li>
              <li>Networking with industry professionals</li>
              <li>Future trends in business and technology</li>
            </ul>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-3">Schedule</h3>

          <div className="bg-gray-100 p-6 rounded-lg shadow-lg space-y-4">
            <div>
              <p className="font-semibold text-gray-900">
                09:00 AM - Opening Ceremony
              </p>
              <p className="text-gray-500 text-sm">
                Welcome speech and introduction
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                10:00 AM - Keynote Sessions
              </p>
              <p className="text-gray-500 text-sm">
                Industry leaders share insights
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                01:00 PM - Networking Lunch
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">
                03:00 PM - Workshops
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
