"use client";
import { useState, useEffect } from "react";
import { Activities } from "../data/data";
import Image from "next/image";
import SecondNavbar from "../../components/secondNavbar/page";
import { ArrowUpRight } from "lucide-react";

export default function ActivitiesPage() {
  // State for the timer
  const [timeLeft, setTimeLeft] = useState(300); // 300 seconds = 5 minutes
  const [isChallengeActive, setIsChallengeActive] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    let timer;
    if (isChallengeActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
      alert("Challenge time's up! Claim your reward.");
    }

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [isChallengeActive, timeLeft]);

  // Start challenge button click handler
  const startChallenge = () => {
    setIsChallengeActive(true);
    setTimeLeft(300); // Reset the timer to 5 minutes each time the challenge starts
  };

  // Format time
 // Format time
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  

  return (
    <>
      <SecondNavbar />
      <div className="bg-[#2E36A4] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-white font-bold text-3xl text-center mb-10 tracking-wide">
            🌍 Discover New Adventures
          </h2>

          <div className="flex justify-center mb-10">
            <button
              onClick={startChallenge}
              className="bg-[#5D4FE1] text-white py-2 px-6 rounded-full font-semibold text-lg shadow-md hover:bg-[#4b3bc8] transition-all duration-300"
            >
              Start Special Challenge ⏳
            </button>
          </div>

          {/* Timer and Challenge Section */}
          {isChallengeActive && (
            <div className="bg-white p-6 rounded-lg shadow-xl text-center mb-8">
              <h3 className="text-2xl font-semibold text-[#2E36A4] mb-4">
                Special Challenge: Time Remaining
              </h3>
              <p className="text-lg font-medium text-gray-700 mb-4">
                Time left: <span className="font-bold">{formatTime(timeLeft)}</span>
              </p>
              <div className="bg-[#4CAF50] text-white rounded-full py-2 px-4 w-max mx-auto">
                <span>Win Special Badge! 🏆</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {Activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 border border-white/60"
              >
                <div className="flex gap-3 overflow-x-auto p-3">
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
