import React from 'react'

const DailyReport = () => {
  const data = [
    { Description: 'Inside Plant- Silo to Kelo river', UOM: 'Mtr', CivilAgency: 'Krishna Buldicone', MechAgency: 'Jai Jagannath', Scope: 1314, LandAvailable: 1314, RowRequired: 0, CivilWorksCompleted: 1214, CivilFrontProvided: 1214, PipeErectionCompleted: 1108, Remarks: '03 Road Crossing Culvert Erection U/p' },
    { Description: 'Budia Village', UOM: 'Mtr', CivilAgency: '', MechAgency: '', Scope: 2552, LandAvailable: 1248, RowRequired: 1304, CivilWorksCompleted: 714, CivilFrontProvided: 462, PipeErectionCompleted: 462, Remarks: 'Fitup & welding U/p' },
    // ... other data rows
  ];
  const columns = Object.keys(data[0]);
const dailyData=  [
    {"date": "5/6/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Land Acquisition", "quantity": 1314, "Legacy data": true},
    {"date": "5/6/2024", "Location": "Budia Village", "work": "Land Acquisition", "quantity": 1248},
    {"date": "5/6/2024", "Location": "Bagbadi Village", "work": "Land Acquisition", "quantity": 0},
    {"date": "5/6/2024", "Location": "Jhikabahal Village", "work": "Land Acquisition", "quantity": 0},
    {"date": "5/6/2024", "Location": "Libra Village", "work": "Land Acquisition", "quantity": 60},
    {"date": "5/6/2024", "Location": "Libra End turning to switch yard boundary", "work": "Land Acquisition", "quantity": 290},
    {"date": "5/6/2024", "Location": "Switch yard boundary to next boundary", "work": "Land Acquisition", "quantity": 60},
    {"date": "5/6/2024", "Location": "Next Boundary over burden area", "work": "Land Acquisition"},
    {"date": "5/6/2024", "Location": "Outside CHP boundary to road crossing", "work": "Land Acquisition", "quantity": 300},
    {"date": "5/6/2024", "Location": "Road crossing to weigh bridge", "work": "Land Acquisition", "quantity": 496},
    {"date": "5/6/2024", "Location": "Proposed weigh bridge to mine end", "work": "Land Acquisition", "quantity": 36},
    {"date": "8/31/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 192},
    {"date": "9/30/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 298},
    {"date": "10/31/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 84},
    {"date": "11/30/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 30},
    {"date": "1/31/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 54},
    {"date": "2/29/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 48},
    {"date": "3/31/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 150},
    {"date": "4/30/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Civil", "quantity": 358},
    {"date": "8/31/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 192},
    {"date": "9/30/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 298},
    {"date": "10/31/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 84},
    {"date": "11/30/2023", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 30},
    {"date": "1/31/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 54},
    {"date": "2/29/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 48},
    {"date": "3/31/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 150},
    {"date": "4/30/2024", "Location": "Inside Plant- Silo to Kelo river", "work": "Pipe Erection", "quantity": 358},
    {"date": "2/29/2024", "Location": "Budia Village", "work": "Civil", "quantity": 96},
    {"date": "2/29/2024", "Location": "Budia Village", "work": "Pipe Erection", "quantity": 96},
    {"date": "4/30/2024", "Location": "Budia Village", "work": "Civil", "quantity": 366},
    {"date": "4/30/2024", "Location": "Budia Village", "work": "Pipe Erection", "quantity": 366},
    {"date": "3/31/2024", "Location": "Libra Village", "work": "Civil", "quantity": 60},
    {"date": "3/31/2024", "Location": "Libra Village", "work": "Pipe Erection", "quantity": 60},
    {"date": "11/30/2023", "Location": "Libra End turning to switch yard boundary", "work": "Civil", "quantity": 146},
    {"date": "11/30/2023", "Location": "Libra End turning to switch yard boundary", "work": "Pipe Erection", "quantity": 146},
    {"date": "12/31/2023", "Location": "Libra End turning to switch yard boundary", "work": "Civil", "quantity": 144},
    {"date": "12/31/2023", "Location": "Libra End turning to switch yard boundary", "work": "Pipe Erection", "quantity": 144},
    {"date": "11/30/2023", "Location": "Outside CHP boundary to road crossing", "work": "Civil", "quantity": 136},
    {"date": "11/30/2023", "Location": "Outside CHP boundary to road crossing", "work": "Pipe Erection", "quantity": 136},
    {"date": "12/31/2023", "Location": "Outside CHP boundary to road crossing", "work": "Civil", "quantity": 32},
    {"date": "12/31/2023", "Location": "Outside CHP boundary to road crossing", "work": "Pipe Erection", "quantity":43} 
]



  return (
    <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
      <div className="m-10 text-center text-2xl font-semibold">Daily Report </div>
      {/* <div className="grid grid-cols-12 bg-gray-50 border-b border-gray-200">
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
      </div> */}


<div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Date</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Work</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {dailyData.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-300 px-4 py-2">{item.date}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Location}</td>
              <td className="border border-gray-300 px-4 py-2">{item.work}</td>
              <td className="border border-gray-300 px-4 py-2">{item.quantity || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  )
}

export default DailyReport