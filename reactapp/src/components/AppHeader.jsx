// components/AppHeader.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function AppHeader() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О нас" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Логотип */}
        <div className="text-xl font-bold text-white">
          <Link to="/">Логотип</Link>
        </div>

        {/* Навигация — десктоп */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-lg text-white transition duration-300 border ${
                isActive(item.path)
                  ? "bg-gray-700 cursor-default border-gray-500"
                  : "bg-gray-800 hover:bg-gray-600 border-transparent"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка меню — мобильная */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Навигация — мобильная */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2 mt-2 rounded-lg transition duration-300 ${
                isActive(item.path)
                  ? "bg-gray-800 cursor-default text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
