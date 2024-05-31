import React from 'react'
import DataCard from '../../DataCard';
import work2 from '../../assets/work/work2.jpg'
import work3 from '../../assets/work/work3.jpg'
import work4 from '../../assets/work/work4.jpg'
import work5 from '../../assets/work/work6.jpg'

const DashBoard = () => {
  console.log("dashboard")
  const summaryData = [
    { title: 'Total Civil Works Completed', value: '3090',image: work2, },
    { title: 'Total Pipe Erection Completed', value: '2984',image: work3, },
    { title: 'Total Civil Percentage Completed', value: '33%',image: work4, },
    { title: 'Total Pipe Erection Percentage Completed', value: '32%',image: work5, },
  ];
  return (
    <div className='h-screen w-full '>
      <div className="">Daily Work Report</div>
      <div className="">Work completed in value</div>
     {summaryData.map((item)=>
    {
      return(
           <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-full mr-4" />
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-gray-600">{item.value}</p>
      </div>
    </div>
      )
    })}
  
    </div>
  )
}

export default DashBoard