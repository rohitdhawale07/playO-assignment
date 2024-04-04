import React, { useEffect } from "react";
import Dashboard from "./components/Dashboard";
import axios from "axios";
import SideNav from "./components/SideNav";

const BASE_URL = "https://fbcdaab7-5c20-4105-b0e2-2702583834c7.mock.pstmn.io";

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers`
      );
      const result = await response.json();
      console.log(result);
    }

    fetchData();
  }, []);

  return (
    <div className="flex ">
      <SideNav />
      <Dashboard />
    </div>
  );
}

export default App;
