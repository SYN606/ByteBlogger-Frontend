import React from "react";
import { FaUsers, FaChartBar, FaCogs, FaEdit, FaComment, FaLock, FaUpload } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import { Title } from "react-head";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 300 },
  { name: "Mar", users: 500 },
  { name: "Apr", users: 700 },
  { name: "May", users: 600 },
];

const menuItems = [
  {
    icon: <FaUsers className="w-8 h-8 text-blue-500" />,
    title: "User Management", desc: "View, edit, delete users",
    link: "/users"
  },
  {
    icon: <FaEdit className="w-8 h-8 text-purple-500" />,
    title: "Blog Management", desc: "Create, edit, delete posts",
    link: "blog_management"
  },
  {
    icon: <FaComment className="w-8 h-8 text-green-500" />,
    title: "Comments Moderation", desc: "Approve/delete comments",
    link: "/comments"
  },
  {
    icon: <FaChartBar className="w-8 h-8 text-green-500" />,
    title: "Dashboard Analytics", desc: "View traffic, engagement stats",
    link: "/analytics"
  },
  {
    icon: <FaCogs className="w-8 h-8 text-yellow-500" />,
    title: "SEO Control", desc: "Manage meta titles, descriptions",
    link: "/seo"
  },
  {
    icon: <FaLock className="w-8 h-8 text-red-500" />,
    title: "Role-Based Access", desc: "Control user permissions",
    link: "/access"
  },
  {
    icon: <FaUpload className="w-8 h-8 text-blue-500" />,
    title: "Media Uploads", desc: "Upload images/videos",
    link: "/media"
  },
];

export default function AdminDashboard() {
  return (
    <>
      <Title>ByteBloggers - Admin Panel</Title>
      
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} className="bg-white rounded-lg shadow-md p-4 flex items-center hover:bg-gray-50 transition">
              {item.icon}
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">User Growth</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
