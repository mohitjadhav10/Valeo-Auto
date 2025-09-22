import React from 'react';

const sentimentEmoji = {
  positive: '😊',
  neutral: '😐',
  negative: '😢',
};

const NewsCard = ({ headline, source, timestamp, tags, sentiment, summary, breaking }) => (
  <div className="border p-3 my-2 rounded shadow-sm">
    {breaking && <span className="text-red-600 font-bold">Breaking</span>}
    <h3 className="font-semibold text-lg">{headline}</h3>
    <p className="text-sm text-gray-500">{source} • {timestamp}</p>
    <div className="flex flex-wrap gap-2 my-1">
      {tags.map((tag, i) => (
        <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">{tag}</span>
      ))}
    </div>
    <p className="text-sm mt-1">{summary}</p>
    <div className="text-right text-xl">{sentimentEmoji[sentiment]}</div>
  </div>
);

export default NewsCard;
