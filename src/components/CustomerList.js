import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";
import EditModal from "./EditModal";

const CustomerList = ({ customers, fetchData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  function onClose() {
    setIsDropdownOpen(false);
    setSearchTerm("");
  }
  const [filters, setFilters] = useState({
    name: "",
    product: "",
    status: "",
  });
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setEditModalOpen(true);
  };
  const handleDeleteClick = async (id) => {
    try {
      await axios.delete(
        `https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers/${id}`
      );
      alert(`data with Tracking ID:- ${id} is successfully deleted`);
      fetchData();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    return (
      (searchTerm === "" ||
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.product === "" || customer.product === filters.product) &&
      (filters.status === "" || customer.status === filters.status)
    );
  });

  const handleChange = (e, field) => {
    setFilters({ ...filters, [field]: e.target.value });
  };
  return (
    <div className="my-2">
      <table className="w-full  table-auto border-collapse shadow-md">
        <thead className="">
          <tr>
            <th className="md:py-3 md:px-4 text-left ">Tracking ID</th>
            <th className="p-2 md:py-3 md:px-4 text-left flex items-center ">
              Product{" "}
              <select
                value={filters.product}
                onChange={(e) => handleChange(e, "product")}
                className="ml-2 w-6 rounded-md border"
              >
                <option value="">All</option>
                <option value="Hat">Hat</option>
                <option value="Laptop">Laptop</option>
                <option value="Phone">Phone</option>
                <option value="Bag">Bag</option>
                <option value="Headset">Headset</option>
                <option value="Mouse">Mouse</option>
                <option value="Clock">Clock</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Monitor">Monitor</option>
                <option value="Keyboard">Keyboard</option>
              </select>
            </th>
            <th className="p-1 md:py-3 md:px-4 text-left relative ">
              Customer Name{" "}
              <button
                className="ml-2 focus:outline-none"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                &#9660;
              </button>
              {isDropdownOpen && (
                <div className="absolute top-0 left-0  bg-white rounded ">
                  <button
                    onClick={onClose}
                    className="text-lg absolute top-0 right-0 px-1 font-bold float-right"
                  >
                    &times;
                  </button>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search customer..."
                    className="w-full text-sm font-normal border p-2 rounded"
                  />
                </div>
              )}
            </th>
            <th className="p-1 md:py-3 md:px-4 text-left ">Date</th>
            <th className="p-1 md:py-3 md:px-4 text-left ">Amount</th>
            <th className="p-1 md:py-3 md:px-4 text-left ">Payment Mode</th>
            <th className="p-1 md:py-3 md:px-4 text-left flex items-center ">
              Status{" "}
              <select
                value={filters.status}
                onChange={(e) => handleChange(e, "status")}
                className="ml-1 w-6 text-sm rounded-md border"
              >
                <option value=""></option>
                <option value="">All</option>
                <option value="Delivered">Delivered</option>
                <option value="Process">Process</option>
                <option value="Canceled">Canceled</option>
              </select>
            </th>
            <th className="p-1 md:py-3 md:px-4 text-left ">Action</th>
          </tr>
        </thead>
        <tbody className=" sm:text-xs md:text-sm font-medium">
          {filteredCustomers.map((customer, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-3 px-4">{customer.id}</td>
              <td className="py-3 px-4">{customer.product}</td>
              <td className="py-3 px-4">{customer.name}</td>
              <td className="py-3 px-4 ">{customer.date}</td>
              <td className="py-3 px-4 ">${customer.amount}</td>
              <td className="py-3 px-4 ">{customer.paymentMode}</td>
              <td
                className={`py-3 px-4 ${
                  customer.status === "Delivered"
                    ? "text-green-500"
                    : customer.status === "Canceled"
                    ? "text-red-500"
                    : null
                } `}
              >
                {customer.status}
              </td>
              <td className="py-3 px-4 flex gap-2 items-center text-[18px]">
                {" "}
                <FaEdit
                  onClick={() => handleEditClick(customer)}
                  className="cursor-pointer text-[#283238]"
                />{" "}
                <AiOutlineDelete
                  onClick={() => handleDeleteClick(customer.id)}
                  className="text-red-500 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editModalOpen && (
        <EditModal
          isOpen={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          customer={selectedCustomer}
          fetchData={fetchData}
        />
      )}
    </div>
  );
};

export default CustomerList;
