// components/AppFooter.jsx
import React from "react";

export default function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-4 text-center fixed bottom-0 left-0 right-0 z-50">
      &copy; {currentYear} АО &quot;РТ-Техприемка&quot;
    </footer>
  );
}
