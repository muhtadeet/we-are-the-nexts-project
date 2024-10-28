"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Bell,
  User,
  Calendar,
  Users,
  ShoppingCart,
  CheckCircle,
  XCircle,
  Coffee,
  Bike,
  UserCheck,
  Tag,
  MessageCircleDashed,
  EllipsisVertical,
} from "lucide-react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("12 months");

  const periods = ["12 months", "30 days", "7 days", "24 hours"];

  const metrics = [
    {
      title: "Total Customers",
      value: "3301",
      icon: Users,
      color: "bg-[#A1045A]",
    },
    {
      title: "Total Orders",
      value: "10457",
      icon: ShoppingCart,
      color: "bg-[#A1045A]",
    },
    {
      title: "Completed Orders",
      value: "3000",
      icon: CheckCircle,
      color: "bg-[#A1045A]",
    },
    {
      title: "Cancelled Orders",
      value: "240",
      icon: XCircle,
      color: "bg-[#A1045A]",
    },
    {
      title: "Restaurant Partners",
      value: "1200",
      icon: Coffee,
      color: "bg-[#A1045A]",
    },
    {
      title: "Rider Partners",
      value: "3628",
      icon: Bike,
      color: "bg-[#A1045A]",
    },
    {
      title: "Approved Rider",
      value: "17349",
      icon: UserCheck,
      color: "bg-[#A1045A]",
    },
    {
      title: "Coupons Active",
      value: "1393",
      icon: Tag,
      color: "bg-[#A1045A]",
    },
  ];

  const pendingTasks = [
    "Restaurant Account",
    "Restaurant Onboarding",
    "Rider Partners",
    "Rider Onboarding",
    "Support Tickets",
  ];

  const activityLog = [
    {
      action: "Modified new item",
      user: "Jakit Sarker",
      time: "12-08-2023 10:14 PM",
    },
    {
      action: "Modified new item",
      user: "Jakit Sarker",
      time: "12-08-2023 10:13 PM",
    },
    {
      action: "Modified new item",
      user: "Jakit Sarker",
      time: "12-08-2023 10:12 PM",
    },
    {
      action: "Modified new item",
      user: "Jakit Sarker",
      time: "12-08-2023 10:11 PM",
    },
    {
      action: "New items approved",
      user: "Jakit Sarker",
      time: "12-08-2023 10:10 PM",
    },
  ];

  const revenueData = [
    { name: "Jan", revenue: 400 },
    { name: "Feb", revenue: 300 },
    { name: "Mar", revenue: 200 },
    { name: "Apr", revenue: 278 },
    { name: "May", revenue: 189 },
    { name: "Jun", revenue: 239 },
    { name: "Jul", revenue: 349 },
    { name: "Aug", revenue: 430 },
    { name: "Sep", revenue: 500 },
    { name: "Oct", revenue: 600 },
    { name: "Nov", revenue: 700 },
    { name: "Dec", revenue: 800 },
  ];

  const orderSummaryData = [
    { name: "Active", value: 389 },
    { name: "Pending", value: 125 },
    { name: "Delivered", value: 234 },
    { name: "Cancelled", value: 234 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-urbanist">
      <header className="flex justify-between items-center mb-8 bg-white rounded-md border border-gray-100 py-7 px-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-400"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex items-center space-x-7">
          <div className="flex flex-row gap-x-5">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Bell className="text-[#A1045A] cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <MessageCircleDashed className="text-[#A1045A] cursor-pointer" />
            </motion.div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex flex-col items-end">
              <span className="text-md font-medium text-black">
                Nayamul Roni
              </span>
              <span className="text-sm font-medium text-gray-300">
                Super Admin
              </span>
            </div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <User className="text-[#A1045A] cursor-pointer" />
            </motion.div>
          </div>
        </div>
      </header>

      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          {periods.map((period) => (
            <motion.button
              key={period}
              className={`px-4 py-2 rounded-full ${
                selectedPeriod === period
                  ? "bg-[#A1045A] text-white"
                  : "bg-white text-[#A1045A]"
              } font-medium`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </motion.button>
          ))}
        </div>
        <button className="flex items-center space-x-2 text-[#A1045A] font-medium px-6 py-3 rounded-full bg-white">
          <Calendar size={20} />
          <span>Custom Date</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={`${metric.color} p-3 rounded-md mr-4`}>
              <metric.icon className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-1 text-black">
                {metric.value}
              </h3>
              <p className="text-md text-gray-400">{metric.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Revenue 600 AED
            </h2>
            <EllipsisVertical className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#A1045A"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Pending Tasks
            </h2>
            <EllipsisVertical className="text-gray-400" />
          </div>
          <ul className="space-y-5">
            {pendingTasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center border border-gray-200 rounded-md p-3"
              >
                <span>{task}</span>
                <span className="bg-pink-100 text-[#A1045A] px-2 py-1 rounded font-medium">
                  10
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Current Order Summary
            </h2>
            <EllipsisVertical className="text-gray-400" />
          </div>
          <div className="flex justify-between items-center mb-4 bg-pink-100 p-3 rounded-lg">
            <span className="text-[#A1045A] font-bold flex gap-3">
              <ShoppingCart />
              <p>125 new orders!</p>
            </span>
            <button className="text-[#A1045A] font-medium p-3 bg-white rounded-lg">Manage Order</button>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            {orderSummaryData.map((entry, index) => (
              <div key={index} className="border border-gray-200 p-4 rounded-lg">
                <h3 className="text-4xl font-bold">{entry.value}</h3>
                <p className="text-xl text-gray-600">{entry.name}</p>
              </div>
            ))}
          </div>
          <div className="h-48 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderSummaryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {orderSummaryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Activity Log
            </h2>
            <EllipsisVertical className="text-gray-400" />
          </div>
          <ul className="space-y-4">
            {activityLog.map((activity, index) => (
              <motion.li
                key={index}
                className="flex justify-between items-center border border-gray-200 rounded-md p-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                  <p className="font-medium">{activity.action}</p>
                </div>
                <span className="text-[#A1045A]">{activity.user}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
