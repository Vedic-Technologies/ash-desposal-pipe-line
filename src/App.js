import React from 'react';
import DataTable from './DataTable';
import DataCard from './DataCard';
import Navbar from './Navbar';

const App = () => {
  const data = [
    { Description: 'Inside Plant- Silo to Kelo river', UOM: 'Mtr', CivilAgency: 'Krishna Buldicone', MechAgency: 'Jai Jagannath', Scope: 1314, LandAvailable: 1314, RowRequired: 0, CivilWorksCompleted: 1214, CivilFrontProvided: 1214, PipeErectionCompleted: 1108, Remarks: '03 Road Crossing Culvert Erection U/p' },
    { Description: 'Budia Village', UOM: 'Mtr', CivilAgency: '', MechAgency: '', Scope: 2552, LandAvailable: 1248, RowRequired: 1304, CivilWorksCompleted: 714, CivilFrontProvided: 462, PipeErectionCompleted: 462, Remarks: 'Fitup & welding U/p' },
    // ... other data rows
  ];

  const summaryData = [
    { title: 'Total Civil Works Completed', value: '3090' },
    { title: 'Total Pipe Erection Completed', value: '2984' },
    { title: 'Total Civil Percentage Completed', value: '33%' },
    { title: 'Total Pipe Erection Percentage Completed', value: '32%' },
  ];

  return (
    <> <Navbar />
    <div className="container mx-auto p-4">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ash Disposal Pipe Line</h1>
      <div className="mb-6">
        <DataTable data={data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {summaryData.map((item, index) => (
          <DataCard key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div></>
  );
};

export default App;
