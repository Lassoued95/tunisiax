"use client"
import Link from "next/link"
import Image from "next/image"
import { Search, Users, Home, BarChart2, User, MapPin, Calendar, Filter, Star } from "lucide-react"
import { useState } from "react"
import { quests , categories } from "../data/data"
export default function SearchPage() {
  const [tab, setTab] = useState("nearby")



  return (
    <div className="bg-[#5D4FE1] pt-16 flex justify-center">
    <div className="w-[70%] h-[50%] bg-[#5D4FE1] min-h-screen pb-16">
      <div className="relative mb-6 pt-6">
        <input
          type="text"
          placeholder="Search for quests, places, events..."
          className="w-full pl-10 pr-12 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 ml-3"
        />
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-white/60 mt-3 " />
        
      </div>

      <div className="mb-6">
        <h2 className="text-white font-medium mb-3">Categories</h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white/10 rounded-xl p-3 flex flex-col items-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <span className="text-white text-xl">{category.icon}</span>
              </div>
              <span className="text-white text-xs font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4 bg-white/10 p-1 rounded-xl">
          {['nearby', 'popular', 'new'].map((value) => (
            <button
              key={value}
              onClick={() => setTab(value)}
              className={`flex-1 py-2 rounded-lg text-black text-sm font-medium transition-colors ${tab === value ? 'bg-white text-[#5D4FE1]' : ''}`}
            >
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </button>
          ))}
        </div>

        <div>
          {tab === 'nearby' && (
            <div className="space-y-4">
              {quests.map((quest) => (
                <div key={quest.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="flex">
                    <div className="w-1/3">
                      <Image
                        src={quest.image}
                        alt={quest.title}
                        width={120}
                        height={120}
                        className="h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">{quest.title}</h3>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full mr-2 font-medium">
                              {quest.category}
                            </span>
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                              <span>{quest.distance}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-xs font-medium text-yellow-700">{quest.rating}</span>
                        </div>
                      </div>

                      <div className="mt-2 space-y-1 text-xs text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1 text-gray-400" />
                          <span>{quest.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1 text-gray-400" />
                          <span>{quest.location}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-white bg-[#5D4FE1] px-2 py-0.5 rounded-full">
                          +{quest.exp} exp
                        </span>
                        <Link href="/quest/detail">
                          <button className="px-3 py-1 bg-[#5D4FE1] hover:bg-[#4D3FD1] text-white text-xs rounded-md">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'popular' && (
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-white">Popular quests will appear here</p>
            </div>
          )}

          {tab === 'new' && (
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <p className="text-white">New quests will appear here</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h2 className="text-white font-medium mb-3">Trending Now</h2>
        <div className="bg-white/10 rounded-xl p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xl">🔥</span>
            </div>
            <div>
              <h3 className="text-white font-medium">Weekend Challenge</h3>
              <p className="text-white/70 text-xs">Complete 3 quests this weekend</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-3">
            <p className="text-white text-sm">
              Join the weekend challenge and earn double points on all completed quests!
            </p>
            <button className="mt-3 w-full bg-white text-[#5D4FE1] hover:bg-white/90 font-medium rounded-md py-2">
              Join Challenge
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#2E36A4] rounded-t-xl shadow-lg">
        <div className="flex justify-between items-center p-4">
          <Link href="/" className="flex flex-col items-center">
            <Home className="h-6 w-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Home</span>
          </Link>
          <Link href="/community" className="flex flex-col items-center">
            <Users className="h-6 w-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Community</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center">
            <Search className="h-6 w-6 text-[#5D4FE1]" />
            <span className="text-xs mt-1 text-[#5D4FE1]">Search</span>
          </Link>
          <Link href="/stats" className="flex flex-col items-center">
            <BarChart2 className="h-6 w-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Stats</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center">
            <User className="h-6 w-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Profile</span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}