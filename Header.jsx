import React from 'react';

const Header = () => (
  <div className="flex justify-between items-center mb-4">
    <input
      type="text"
      placeholder="Search"
      className="border px-3 py-1 rounded w-2/3"
    />
    <button className="text-gray-500">🔁</button>
  </div>
);

export default Header;
