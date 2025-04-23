"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import SecondNavbar from "../../components/secondnavbar/page";
import { Search, Users, Home, BarChart2, User } from "lucide-react"
import { UsersData, ProfileData } from "../data/data"

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = UsersData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <SecondNavbar className="bg-[#e4e3f0]" />

      <div className="bg-[#2E36A4] pt-16 flex justify-center">
        <div className="w-[70%] h-[50%] bg-[#5D4FE1] min-h-screen pb-16">
          <div className="p-4 pt-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-white font-semibold text-xl">Community</h1>
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Profile Section */}
            <div className="bg-white/10 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={ProfileData.avatar || "/placeholder.svg"}  // Default to placeholder if avatar is missing
                    alt={ProfileData.name}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#5D4FE1] ${ProfileData.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
                  ></div>
                </div>
                <div>
                  <h3 className="text-white font-medium">{ProfileData.name}</h3>
                  <p className="text-white/70 text-xs">{ProfileData.bio}</p>
                  <span className="text-white/70 text-xs">{ProfileData.points} pts</span>
                </div>
              </div>
            </div>

            <div className="relative mb-6">
              <input
                placeholder="Search for friends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full h-10 rounded-xl"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>

            <div className="mb-6">
              <h2 className="text-white font-medium mb-3">Friend Suggestions</h2>
              <div className="flex overflow-x-auto pb-2 gap-4 hide-scrollbar">
                {UsersData.slice(0, 4).map((user) => (
                  <div key={user.id} className="flex-shrink-0 w-24">
                    <div className="flex flex-col items-center">
                      <div className="relative mb-2">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                          <Image
                            src={user.avatar || "/placeholder.svg"}  // Default to placeholder if avatar is missing
                            alt={user.name}
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#5D4FE1] ${user.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
                        ></div>
                      </div>
                      <p className="text-white text-xs text-center font-medium truncate w-full">{user.name}</p>
                      <button className="mt-2 text-xs h-7 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-md">
                        Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Quests */}
            <div className="mb-6">
              <h2 className="text-white font-medium mb-3">Active Quests</h2>
              <div className="bg-white/10 rounded-xl p-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🏆</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Downtown Explorer</h3>
                    <p className="text-white/70 text-xs">5 friends are doing this quest</p>
                  </div>
                  <button className="text-sm bg-white text-[#5D4FE1] hover:bg-white/90 rounded-md py-1 px-3">
                    Join
                  </button>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-lg">🍔</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">Food Festival</h3>
                    <p className="text-white/70 text-xs">3 friends are doing this quest</p>
                  </div>
                  <button className="text-sm bg-white text-[#5D4FE1] hover:bg-white/90 rounded-md py-1 px-3">
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Your Friends */}
            <div>
              <h2 className="text-white font-medium mb-3">Your Friends</h2>
              <div className="space-y-3">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="bg-white/10 rounded-xl p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div
                          className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#5D4FE1] ${user.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
                        ></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h3 className="text-white font-medium">{user.name}</h3>
                          <span className="text-white/70 text-xs">{user.points} pts</span>
                        </div>
                        <p className="text-white/70 text-xs">{user.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 bg-[#2E36A4] rounded-t-xl">
            <div className="flex justify-between items-center p-4">
              <Link href="/" className="flex flex-col items-center">
                <Home className="h-6 w-6 text-white" />
                <span className="text-xs mt-1 text-white">Home</span>
              </Link>
              <Link href="/community" className="flex flex-col items-center">
                <Users className="h-6 w-6 text-white" />
                <span className="text-xs mt-1 text-white">Community</span>
              </Link>
              <Link href="/search" className="flex flex-col items-center">
                <Search className="h-6 w-6 text-white" />
                <span className="text-xs mt-1 text-white">Search</span>
              </Link>
              <Link href="/stats" className="flex flex-col items-center">
                <BarChart2 className="h-6 w-6 text-white" />
                <span className="text-xs mt-1 text-white">Stats</span>
              </Link>
              <Link href="/profile" className="flex flex-col items-center">
                <User className="h-6 w-6 text-white" />
                <span className="text-xs mt-1 text-white">Profile</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
