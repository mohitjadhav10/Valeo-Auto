import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Internet', 'LinkedIn', 'X', 'Valeo.com'];

  return (
    <div className="flex justify-between mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-2 py-1 ${
            activeTab === tab ? 'font-bold underline' : 'text-gray-500'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
