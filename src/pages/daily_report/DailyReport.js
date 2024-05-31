import React from 'react'

const DailyReport = () => {
  const data = [
    { Description: 'Inside Plant- Silo to Kelo river', UOM: 'Mtr', CivilAgency: 'Krishna Buldicone', MechAgency: 'Jai Jagannath', Scope: 1314, LandAvailable: 1314, RowRequired: 0, CivilWorksCompleted: 1214, CivilFrontProvided: 1214, PipeErectionCompleted: 1108, Remarks: '03 Road Crossing Culvert Erection U/p' },
    { Description: 'Budia Village', UOM: 'Mtr', CivilAgency: '', MechAgency: '', Scope: 2552, LandAvailable: 1248, RowRequired: 1304, CivilWorksCompleted: 714, CivilFrontProvided: 462, PipeErectionCompleted: 462, Remarks: 'Fitup & welding U/p' },
    // ... other data rows
  ];
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
  )
}

export default DailyReport