import React, { useEffect, useState, useCallback } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from "axios";

const RegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [load, setLoad] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [departmentList, setDepartmentList] = useState([
    { depName: "Department_A", count: 0 },
    { depName: "Department_B", count: 0 },
    { depName: "Department_C", count: 0 },
    { depName: "Department_D", count: 0 },
  ]);

  const getDepData = useCallback(async () => {
    try {
      const departmentCount = await axios.get("/departmentData");
      const updatedList = departmentList.map((item) => {
        const data = departmentCount.data.departmentCount.find(
          (e) => e._id === item.depName
        );
        return data ? { ...item, count: data.count } : item;
      });

      setDepartmentList(updatedList);
      console.log(updatedList, "final");
    } catch (error) {
      console.log("Error", error);
    }
  }, [departmentList]);

  useEffect(() => {
    if (load) {
      getDepData();
      setLoad(false);
    }
  }, [load, getDepData]);
  const resetForm = () => {
    setFullName("");
    setMobile("");
    setEmail("");
    setCompanyName("");
    setWorkshop("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        fullName,
        mobile,
        email,
        companyName,
        workshop,
      });


      if (response.data.success) {
        toast.success(response.data.message);
        resetForm();

      }else{
        toast.error(response.data.message)
        resetForm();

      }


    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-30 bg-blue-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-8 mt-8">
        Register to Attend
      </h2>
      <form className="grid grid-cols-2 gap-4 max-w-md" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-xl mb-2" htmlFor="fullName">
            Full Name:
          </label>
          <div className="border-b border-orange-500">
            <input
              className="w-full px-3 py-2 bg-transparent border-none text-white focus:outline-none"
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-xl mb-2" htmlFor="email">
            Email:
          </label>
          <div className="border-b border-orange-500">
            <input
              className="w-full px-3 py-2 bg-transparent border-none text-white focus:outline-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="block text-xl mb-2" htmlFor="mobile">
            Mobile:
          </label>
          <div className="border-b border-orange-500">
            <input
              className="w-full px-3 py-2 bg-transparent border-none text-white focus:outline-none"
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-4">
          <label className="block text-xl mb-2" htmlFor="companyName">
            Company Name:
          </label>
          <div className="border-b border-orange-500">
            <input
              className="w-full px-3 py-2 bg-transparent border-none text-white focus:outline-none"
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Workshop Selection */}
        {/* Workshop Selection */}
        <div className="mb-4 col-span-2">
          <label className="block text-xl mb-2" htmlFor="workshop">
            Workshop:
          </label>
          <div className="border-b border-orange-500">
            <select
              className="w-full px-3 py-2  border-none text-black focus:outline-none"
              value={workshop}
              onChange={(e) => setWorkshop(e.target.value)}
              required
            >
              <option value="" className="text-black">
                Select Department
              </option>
              {departmentList.map((dept, index) => (
              <option
              key={index}
              value={dept.depName}
              disabled={dept.count > 40}
              className={dept.count >40 ? "text-gray-500" : "text-black"} 
            >
              {`${dept.depName} (${dept.count})`}
            </option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mb-2 col-span-2">
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-2 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default RegistrationForm;
