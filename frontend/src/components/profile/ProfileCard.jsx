'use client'
import Image from 'next/image'
import { StatsData } from '../../app/data/data'

export default function ProfileCard() {
  return (
    <div className="bg-white  rounded-2xl shadow-lg p-6 text-center max-w-sm  mx-auto">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <Image
          src="/avatar/pic1.jpg"
          alt="Mohamed Lassoued"
          fill
          className="rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold text-gray-800">Mohamed Lassoued</h2>
      <p className="text-gray-500 mb-4">Football at heart, photography by passion, and MERN stack enthusiast</p>

      {/* Stats section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {StatsData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="w-6 h-6 text-green-500 mb-1" />
            <span className="text-sm font-medium text-gray-800">{item.value}</span>
            <span className="text-xs text-gray-500">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Progress Section */}
      <div className="bg-white rounded-xl p-4 mb-6">
        <div className="mb-4">
          <p className="text-gray-700 font-medium">You have played a total</p>
          <p className="text-gray-700 font-medium">24 quests this month!</p>
        </div>

        <div className="relative pt-4">
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-[#5D4FE1] rounded-full" style={{ width: "50%" }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <span className="text-2xl font-bold">37</span>
              <span className="text-gray-500 text-sm">/50</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 mr-2">
                <span className="text-gray-700 font-medium">5</span>
              </div>
              <div className="text-xs">
                <p className="text-gray-500">Quest in progress</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#5D4FE1] mr-2">
                <span className="text-white font-medium">21</span>
              </div>
              <div className="text-xs">
                <p className="text-gray-500">Quest done</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performance by Category */}
      <div className="bg-[#5D4FE1] rounded-xl p-4 border border-white/20">
        <h3 className="text-white font-medium mb-2">Top performance by category</h3>

        <div className="flex gap-2 mb-4">
          <span className="bg-[#7B6FE6] text-white px-2 py-1 rounded-full text-xs">Social</span>
          <span className="bg-[#7B6FE6] text-white px-2 py-1 rounded-full text-xs">Sports</span>
          <span className="bg-[#7B6FE6] text-white px-2 py-1 rounded-full text-xs">Fetching</span>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-white text-xs mb-1">
              <span>100%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full">
              <div className="h-2 bg-white rounded-full" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-white text-xs mb-1">
              <span>75%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full">
              <div className="h-2 bg-white rounded-full" style={{ width: "50%" }}></div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}
