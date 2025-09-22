import React from 'react';

const Filters = () => (
  <div className="flex justify-between mb-4">
    <select className="border px-2 py-1 rounded">
      <option>EV</option>
      <option>Autonomous</option>
      <option>Earnings</option>
    </select>
    <select className="border px-2 py-1 rounded">
      <option>Today</option>
      <option>Last 7 Days</option>
    </select>
    <button className="border px-2 py-1 rounded">Sort By</button>
  </div>
);

export default Filters;
