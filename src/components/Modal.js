import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHatCowboy,
  FaLaptop,
  FaPhone,
  FaShoppingBag,
  FaHeadphones,
  FaMouse,
  FaClock,
  FaTshirt,
  FaDesktop,
  FaKeyboard,
} from "react-icons/fa";

const Modal = ({ isOpen, onClose, addCustomer }) => {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    date: "",
    amount: "",
    paymentMode: "",
    status: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      await axios.post(
        "https://660c07dd3a0766e85dbd3665.mockapi.io/api/customers/customers",
        formData
      );
      // fetchData();
      setFormData({
        product: "",
        name: "",
        date: "",
        amount: "",
        paymentMode: "",
        status: "",
      });
      onClose();
      await addCustomer(formData);
      // console.log(formData);
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  const productOptions = [
    { value: "Hat", icon: <FaHatCowboy />, label: "Hat" },
    { value: "Laptop", icon: <FaLaptop />, label: "Laptop" },
    { value: "Phone", icon: <FaPhone />, label: "Phone" },
    { value: "Bag", icon: <FaShoppingBag />, label: "Bag" },
    { value: "Headset", icon: <FaHeadphones />, label: "Headset" },
    { value: "Mouse", icon: <FaMouse />, label: "Mouse" },
    { value: "Clock", icon: <FaClock />, label: "Clock" },
    { value: "T-shirt", icon: <FaTshirt />, label: "T-shirt" },
    { value: "Monitor", icon: <FaDesktop />, label: "Monitor" },
    { value: "Keyboard", icon: <FaKeyboard />, label: "Keyboard" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 flex justify-end items-start"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: isOpen ? 0 : 50, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-white relative rounded-l-lg h-screen p-6 w-1/4 "
      >
        <button
          onClick={onClose}
          className="absolute top-0 left-0 m-1 text-2xl font-bold text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold my-4">Add Customer</h2>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="product">Select Product</label>
            <select
              id="product"
              className="border p-1"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">Select Product</option>
              {productOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.icon} {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="name">Customer Name</label>
            <input
              id="name"
              className="border p-1"
              type="name"
              name="name"
              placeholder="Enter customer name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              className="border p-1"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              className="border p-1"
              type="number"
              name="amount"
              placeholder="$"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="paymentMode">Payment Mode</label>
            <select
              id="paymentMode"
              className="border p-1"
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
            >
              <option value="">Select Payment Mode</option>
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="Cash On Delivery">Cash On Delivery</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              className="border p-1"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="">Select Status</option>
              <option value="Delivered">Delivered</option>
              <option value="Process">Process</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#283238] hover:bg-black text-white text-center py-2 rounded-md "
          >
            + Add
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
