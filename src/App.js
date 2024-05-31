import React from 'react';
import Navbar from './Navbar';
import { Routes,Route,useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import Layout from './pages/layout/Layout';

const App = () => {
  const location = useLocation();
  



  return (
    <> 
    {location.pathname !== "/" && <Navbar />}
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/layout/*" element={<Layout/>}/>   
    </Routes>
    {/* <div className="container mx-auto p-4">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Ash Disposal Pipe Line</h1>
      <div className="mb-6">
        <DataTable data={data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {summaryData.map((item, index) => (
          <DataCard key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div> */}
    </>
  );
};

export default App;
