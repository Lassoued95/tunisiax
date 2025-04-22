"use client";
import {activities} from "./data/data"
import Link from "next/link";
import Image from "next/image";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4FE1] to-[#4438CA] text-white">
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-16">
        {/* Header */}
       

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">
            Discover <span className="text-yellow-300">TunisiaX</span>
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Where ambition meets connection. <span className="text-yellow-200 font-semibold">TunisiaX</span> is a dynamic hub to connect, grow, and thrive.
            Whether you're chasing goals, sharing ideas, or sparking collaboration, this is your space to shine.
          </p>
        </section>
        

        {/* Recent Activities */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          Recent Activities
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-1">
                {activity.images.map((img, idx) => (
                  <Image
                    key={idx}
                    {...img}
                    width={200}
                    height={100}
                    className="w-full h-[120px] object-cover"
                  />
                ))}
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-lg">{activity.title}</h3>
                    <div className="flex flex-wrap gap-1 mt-1 text-xs">
                      {activity.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-0.5 rounded-full font-medium ${tag.className}`}
                        >
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-yellow-500 text-sm">
                    {activity.rating.stars}{" "}
                    <span className="text-gray-600 ml-1">{activity.rating.score}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600">{activity.description}</p>

                {activity.extraBadges && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {activity.extraBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full font-medium ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                    {activity.link && (
                      <Link
                        href={activity.link.href}
                        className="text-[#5D4FE1] hover:underline ml-auto"
                      >
                        {activity.link.text}
                      </Link>
                    )}
                  </div>
                )}

                <div className="mt-4 flex justify-end">
                  <Link
                    href="/login"
                    className="bg-[#5D4FE1] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#473ecc] transition"
                  >
                    Apply Now →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/activities"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Visit More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
