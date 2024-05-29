import React from 'react';

const DataTable = ({ data }) => {
  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
      <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
        {columns.map((key, index) => (
          <div
            key={index}
            className="col-span-1 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 last:border-r-0"
          >
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </div>
        ))}
      </div>
      <div>
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-12 bg-white divide-y divide-gray-200">
            {Object.values(row).map((value, index) => (
              <div
                key={index}
                className="col-span-1 px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200 last:border-r-0"
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
