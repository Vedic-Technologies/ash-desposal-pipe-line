// src/components/MainLayout.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar';
import DashBoard from '../dashboard/DashBoard';
import MonthlyReport from '../monthly_report/MonthlyReport';
import DailyReport from '../daily_report/DailyReport';
import ManageReport from '../manage_report/ManageReport';

const Layout = () => {
  return (
   
      <div className="flex">
        <LeftSidebar />
        <div className="ml-64 p-4 flex-grow">
          <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/monthly_report" element={<MonthlyReport />} />
            <Route path="/daily_report" element={<DailyReport />} />
            <Route path="/manage_report" element={<ManageReport />} />
          </Routes>
        </div>
      </div>
  
  );
}

export default Layout;


