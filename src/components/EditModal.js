import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const EditModal = ({ isOpen, onClose, customer, fetchData }) => {
  const [editedData, setEditedData] = useState({ ...customer });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers/${editedData.id}`,
        editedData
      );
      fetchData();
      onClose();
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`${
            isOpen ? "block" : "hidden"
          } fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end items-start`}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: isOpen ? 0 : 50, opacity: isOpen ? 1 : 0 }}
            exit={{ x: 50, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white relative rounded-l-lg h-screen p-6 w-1/4"
          >
            <button
              onClick={onClose}
              className="absolute top-0 left-0 m-1 text-2xl font-bold text-gray-600"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold my-4">
              Edit Customer Details
            </h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label>Select Product</label>
                <select
                  className="border p-1"
                  name="product"
                  value={editedData.product}
                  onChange={handleChange}
                >
                  <option value="Hat">Hat</option>
                  <option value="Laptop">Laptop</option>
                  <option value="Phone">Phone</option>
                  <option value="Bag">Bag</option>
                  <option value="Headset">Headset</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Clock">Clock</option>
                  <option value="T-shirt">T-shirt</option>
                  <option value="Monitor">Monitor</option>
                  <option value="Keyboard">Keyboard</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label>Customer Name</label>
                <input
                  className="border p-1"
                  type="text"
                  name="name"
                  value={editedData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="">Date</label>
                <input
                  type="date"
                  name="date"
                  className="border p-1"
                  value={editedData.date}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Amount</label>
                <input
                  className="border p-1"
                  type="number"
                  name="amount"
                  value={editedData.amount}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Payment Mode</label>
                <select
                  name="paymentMode"
                  className="border p-1"
                  value={editedData.paymentMode}
                  onChange={handleChange}
                >
                  <option value="">Select Payment Mode</option>
                  <option value="Transfer Bank">Transfer Bank</option>
                  <option value="Cash On Delivery">Cash On Delivery</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Status</label>
                <select
                  name="status"
                  className="border p-1"
                  value={editedData.status}
                  onChange={handleChange}
                >
                  <option value="">Select Status</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Process">Process</option>
                  <option value="Canceled">Canceled</option>
                </select>
              </div>
              {/* Add more fields as needed */}
              <button
                type="submit"
                className="bg-[#283238] hover:bg-black text-white text-center py-2 rounded-md "
              >
                Save Changes
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white text-center py-2 rounded-md "
                onClick={onClose}
              >
                Cancel
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditModal;
