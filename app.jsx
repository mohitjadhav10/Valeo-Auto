import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Filters from './components/Filters';
import NewsCard from './components/NewsCard';

const App = () => {
  const [activeTab, setActiveTab] = useState('Internet');

  const dummyNews = [
    {
      headline: 'Valeo unveils new EV tech',
      source: 'source.com',
      timestamp: '2 min ago',
      tags: ['EV', 'Self-driving'],
      sentiment: 'negative',
      summary: 'Lorem ipsum dolor sit amet...',
      breaking: true,
    },
    {
      headline: 'Valeo earnings beat expectations',
      source: 'source.com',
      timestamp: '5 min ago',
      tags: ['Earnings', 'Thermal systems'],
      sentiment: 'positive',
      summary: 'Lorem ipsum dolor sit amet...',
      breaking: false,
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Filters />
      {dummyNews.map((item, idx) => (
        <NewsCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default App;
