import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="max-w-7xl container mx-auto border-t border-white">
      <div className="px-6 py-6 text-center text-md text-gray-900">
        © {year} | Mohd Kamran Khan.
      </div>
    </footer>
  );
}

export default Footer;
