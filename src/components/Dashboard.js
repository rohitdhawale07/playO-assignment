import React, { useState, useEffect } from "react";
import CustomerList from "./CustomerList";
import Pagination from "./Pagination";
import axios from "axios";
import { FaBars, FaUser } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Modal from "./Modal";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage, setCustomersPerPage] = useState(10);
  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers"
      );
      setCustomers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const addCustomer = async (newCustomerData) => {
    try {
      await axios.post(
        "https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers",
        newCustomerData
      );

      // Fetch the updated customer list from the server
      const response = await axios.get(
        "https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers"
      );
      const updatedCustomers = response.data;
      console.log("Updated customer list:", updatedCustomers);

      // Update the customers state
      setCustomers((prevCustomers) => [...prevCustomers, newCustomerData]);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const handleEntriesPerPageChange = (e) => {
    setCustomersPerPage(parseInt(e.target.value));
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 w-full h-screen relative">
      {/*.............. Search Input, icon and user icon.................... */}
      <div className="flex items-center sm:justify-center gap-8 md:justify-between mb-2">
        <div className="sm:hidden ">
          <FaBars />
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-2 pr-2 rounded-l-md border border-gray-300 focus:outline-none"
          />
          <div className="flex items-center bg-[#283238] rounded-r-md px-3 cursor-pointer">
            <BiSearch className="text-white text-xl" />
          </div>
        </div>
        <div className="text-2xl cursor-pointer">
          <FaUser />
        </div>
      </div>
      {/*................show entries & Add customer button....................... */}
      <div className="flex items-center justify-between my-2">
        <div>
          <span>
            Show{" "}
            <input
              value={customersPerPage}
              onChange={handleEntriesPerPageChange}
              type="number"
              className="w-12 bg-slate-100 rounded-md border px-1"
            />{" "}
            entries
          </span>
        </div>
        <div>
          <button
            onClick={openModal}
            className="bg-[#283238] text-white rounded-md px-3 py-1 hover:bg-black"
          >
            + Add Customer
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      </div>
      <Modal fetchData={fetchData} addCustomer={addCustomer} />
      <CustomerList
        customers={currentCustomers}
        customersList={customers}
        fetchData={fetchData}
      />
      <div className="absolute bottom-0 right-0 mx-8 my-4">
        <Pagination
          customersPerPage={customersPerPage}
          totalCustomers={customers.length}
          currentPage={currentPage}
          paginate={paginate}
          setCurrentPage={setCurrentPage}
          isOpen={isModalOpen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
