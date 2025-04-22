"use client"
import { UsersData } from "../data/data"
import SecondNavbar from "../../components/secondnavbar/page"
import Footer from "../../components/footer/page"
import { Users, UserCheck, Star } from "lucide-react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts"

export default function StatsPage() {
  const totalUsers = UsersData.length
  const onlineUsers = UsersData.filter(user => user.status === "online").length
  const offlineUsers = totalUsers - onlineUsers
  const totalPoints = UsersData.reduce((sum, user) => sum + user.points, 0)
  const averagePoints = totalUsers > 0 ? Math.round(totalPoints / totalUsers) : 0
  const topUser = UsersData.reduce((max, user) => (user.points > max.points ? user : max), UsersData[0])

  const pointsData = UsersData.map(user => ({
    name: user.name,
    points: user.points,
  }))

  const statusData = [
    { name: "Online", value: onlineUsers },
    { name: "Offline", value: offlineUsers },
  ]

  // Simulated growth data for demo purposes
  const growthData = [
    { name: "Week 1", users: 2 },
    { name: "Week 2", users: 4 },
    { name: "Week 3", users: 6 },
    { name: "Week 4", users: totalUsers },
  ]

  const pieColors = ["#34D399", "#F87171"] // online / offline

  return (
    <>
      <SecondNavbar className="bg-[#e4e3f0]" />
      <div className="bg-[#2E36A4] pt-16 flex justify-center">
        <div className="w-[85%] min-h-screen pb-16 bg-[#5D4FE1] p-6">
          <h1 className="text-white text-2xl font-semibold mb-6">Community Stats</h1>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatCard icon={<Users className="h-6 w-6 text-white" />} label="Total Users" value={totalUsers} />
            <StatCard icon={<UserCheck className="h-6 w-6 text-white" />} label="Online Users" value={onlineUsers} />
            <StatCard icon={<Star className="h-6 w-6 text-yellow-300" />} label="Top User" value={topUser.name} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* Bar Chart - Points per User */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-4">Points by User</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={pointsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="points" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart - Online vs Offline */}
            <div className="bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-4">User Status</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Tooltip />
                  <Legend />
                  <Pie data={statusData} dataKey="value" nameKey="name" outerRadius={100} label>
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Line Chart - Simulated Weekly Growth */}
          <div className="bg-white rounded-xl p-4">
            <h2 className="text-lg font-semibold mb-4">Weekly Community Growth</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <Footer className="bg-[#5D4FE1]" />
      
    </>
  )
}

function StatCard({ icon, label, value }) {
  return (
    <div className="bg-white/10 rounded-xl p-5 flex items-center gap-4">
      <div className="bg-[#2E36A4] p-3 rounded-full">{icon}</div>
      <div>
        <h3 className="text-white text-sm">{label}</h3>
        <p className="text-white text-xl font-bold">{value}</p>
      </div>
    </div>
  )
}
