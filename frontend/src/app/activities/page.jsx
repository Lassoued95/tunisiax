"use client";
import { Activities } from "../data/data";
import Image from "next/image";
import SecondNavbar from "../../components/secondnavbar/page";
import { ArrowUpRight } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <>
      <SecondNavbar />
      <div className="bg-[#2E36A4] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-white font-bold text-3xl text-center mb-10 tracking-wide">
            🌍 Discover New Adventures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/60"
              >
                {/* Image carousel */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide p-3">
                  {activity.images.map((img, index) => (
                    <Image
                      key={index}
                      {...img}
                      width={130}
                      height={80}
                      alt={img.alt}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-[#2E36A4]">
                      {activity.title}
                    </h3>
                    {activity.rating?.score && (
                      <span className="text-yellow-500 font-medium text-sm">
                        ⭐ {activity.rating.score}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm">{activity.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {activity.tags?.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full font-medium ${tag.className}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>

                  {/* Badges */}
                  {activity.extraBadges?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {activity.extraBadges.map((badge, idx) => (
                        <span
                          key={idx}
                          className={`text-xs font-medium px-2 py-1 rounded-full ${badge.className}`}
                        >
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Footer link and points */}
                  <div className="flex justify-between items-center pt-4">
                    <a
                      href={activity.link?.href || "#"}
                      className="text-sm font-semibold text-[#5D4FE1] flex items-center gap-1 hover:underline"
                    >
                      {activity.link?.text || "Explore"} <ArrowUpRight size={14} />
                    </a>
                    {activity.points && (
                      <span className="text-gray-700 font-semibold text-sm">
                        {activity.points} pts
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
