import React, { useState } from "react";
import { monthly_report_data } from "./MonthlyReprtData";

const MonthlyReport = () => {
  const options = [
    "Inside Plant- Silo to Kelo river",
    "Budia Village",
    "Bagbadi Village",
    "Jhikabahal Village",
    "Libra Village",
    "Libra End turning to switch yard boundary",
    "Switch yard boundary to next boundary",
    "Next Boundary over burden area",
    "Outside CHP boundary to road crossing",
    "Road crossing to weigh bridge",
    "Proposed weigh bridge to mine end",
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };
console.log(monthly_report_data)
  const selectedData = monthly_report_data.find(item => item.location === selectedOption);

  return (
    <div className="w-[80%] m-auto">
      <div className="text-xl mt-10 mb-5">
        Pipe Corridor Length Monthly Report
      </div>
      <div className="">
        <div className="mb-1">Select a location</div>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="w-96 bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select Location</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {selectedData && (
         <div className="p-6">
         <div className="mb-8 p-4 border border-gray-200 rounded-lg shadow-md">
           <div
             className="h-48 mb-4 bg-cover bg-center rounded-lg"
             style={{
               backgroundImage: `url(${selectedData.locationImage})`
             }}
           >
             <h2 className="text-3xl font-bold text-white bg-gray-900 bg-opacity-75 p-4 rounded-t-lg">
               {selectedData.location}
             </h2>
           </div>
           {/* <div className="grid grid-cols-3 gap-4 mb-4">
             <div>
               <h3 className="font-semibold text-lg">Scope</h3>
               <p className="text-gray-700">{selectedData.scope}</p>
             </div>
             <div>
               <h3 className="font-semibold text-lg">Completed</h3>
               <p className="text-gray-700">Civil: {selectedData.completed.civil}</p>
               <p className="text-gray-700">Pipe Erection: {selectedData.completed.pipe_erection}</p>
             </div>
             <div>
               <h3 className="font-semibold text-lg">Balance</h3>
               <p className="text-gray-700">Civil: {selectedData.balance.civil}</p>
               <p className="text-gray-700">Pipe Erection: {selectedData.balance.pipe_erection}</p>
             </div>
           </div> */}

<div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Scope</h3>
            <p className="text-gray-700">{selectedData.scope}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Completed</h3>
            <p className="text-gray-700">Civil: {selectedData.completed.civil}</p>
            <p className="text-gray-700">Pipe Erection: {selectedData.completed.pipe_erection}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-lg mb-2">Balance</h3>
            <p className="text-gray-700">Civil: {selectedData.balance.civil}</p>
            <p className="text-gray-700">Pipe Erection: {selectedData.balance.pipe_erection}</p>
          </div>
        </div>

           {/* <div className="overflow-x-auto">
             <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
               <thead className="bg-gray-100">
                 <tr>
                   <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Month</th>
                   <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Civil</th>
                   <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Pipe Erection</th>
                 </tr>
               </thead>
               <tbody>
                 {selectedData.month.map((monthItem, monthIndex) => (
                   <tr key={monthIndex} className="hover:bg-gray-50">
                     <td className="py-2 px-4 border-b border-gray-200">{monthItem.month}</td>
                     <td className="py-2 px-4 border-b border-gray-200">{monthItem.civil}</td>
                     <td className="py-2 px-4 border-b border-gray-200">{monthItem.pipe_erection}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div> */}


<div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Month</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Civil</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-gray-600 font-semibold">Pipe Erection</th>
              </tr>
            </thead>
            <tbody>
              {selectedData.month.map((monthItem, monthIndex) => (
                <tr
                  key={monthIndex}
                  className={`${monthIndex % 2 === 0 ? 'bg-white' : 'bg-blue-50'} hover:bg-gray-50`}
                >
                  <td className="py-2 px-4 border-b border-gray-200">{monthItem.month}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{monthItem.civil}</td>
                  <td className="py-2 px-4 border-b border-gray-200">{monthItem.pipe_erection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


         </div>
       </div>
      )}
    </div>
  );
};

export default MonthlyReport;
