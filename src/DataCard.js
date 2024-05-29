import React from 'react';

const DataCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-4 text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default DataCard;
