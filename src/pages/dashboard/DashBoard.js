import React from 'react'
import DataCard from '../../DataCard';
import work2 from '../../assets/work/work2.jpg'
import work3 from '../../assets/work/work3.jpg'
import work4 from '../../assets/work/work4.jpg'
import work5 from '../../assets/work/work6.jpg'
import { TbCurrencyCent } from "react-icons/tb";
import { FaFire } from "react-icons/fa6";


const DashBoard = () => {

  console.log("dashboard")
  const summaryDataInValue = [
    { title: 'Total Civil Works Completed', value: '3090', total_work :'', image: work2, },
    { title: 'Total Pipe Erection Completed', value: '2984',image: work3, },
   
  ];
  const summaryDataInPercentage = [    
    { title: 'Total Civil Percentage Completed', value: '33%',image: work4, },
    { title: 'Total Pipe Erection Percentage Completed', value: '32%',image: work5, },
  ];
  return (
    <div className="h-screen w-full bg-blue-200">
    <div className=' w-[80%]  m-auto '>
   

      <div className="h-10 "></div>
      <div className="text-4xl text-center font-semibold">Dashboard</div>
      <div className="text-2xl mt-14 mb-3">Work completed in value</div>
    <div className=" flex gap-10">
     {summaryDataInValue.map((item,index)=>
    {
      return(
           <div className="flex items-start p-3 bg-white rounded-lg shadow-md w-[500px]" key={index}>
      <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-xl mr-4" />
      <div>
        <h3 className="text-lg ">{item.title}</h3>
        <p className="text-gray-600 text-3xl font-semibold m-5">{item.value}</p>
      </div>
    </div>
      )
    })}</div>
    <div className="text-2xl mt-10 mb-0">      
Work completed in percentage
    </div>

<div className=" flex gap-10 mt-5">
    {summaryDataInPercentage.map((item,index)=>
    {
      return(
           <div className="flex items-start  p-4 bg-white rounded-lg shadow-md w-[500px]" key={index} >
      <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-xl mr-4" />
      <div>
        <h3 className="text-lg ">{item.title}</h3>
        <p className="text-gray-600 text-3xl font-semibold m-5">{item.value}</p>
      </div>
    </div>
      )
    })}
  </div>
    </div>


    </div>
  )
}

export default DashBoard