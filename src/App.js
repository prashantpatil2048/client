import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from "./component/Home.js"
import Dashboard from './component/Dashboard';
import Createads from './component/Createads';
import MyTable from './component/MyTable.js';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="table" element={<MyTable />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="createads" element={<Createads />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;

