import Button from "@/components/Button";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Transactions = () => {
  return (
    <section className="py-5 px-10">
      <h1 className="text-xl font-semibold text-slate-700">Trasations</h1>
      <div className=" mt-5 text-[#1A2D62] grid grid-cols-4 gap-5">
        {[
          "Total Trasactions",
          "Pending",
          "Failed",
          "Refunded Counts",
          "Net Revenue",
        ].map((value) => (
          <>
            <div className="p-4 shadow bg-white rounded-sm" key={value}>
              <h1 className="text-base font-semibold">{value}</h1>
              <p className="text-2xl font-bold text-green-400">380</p>
            </div>
          </>
        ))}
      </div>
      {/* Transaction Table */}
      <div className="bg-white shadow p-2 flex flex-col mt-5  rounded-md">
        <div className="flex items-center justify-between">
          <Button text="Add Transaction" className="!text-xs !p-2" />
          <div className="bg-white justify-end ml-auto  px-2 gap-2 py-2 rounded-lg flex shadow">
            <input
              type="text"
              className="text-sm h-full border-r-2 border-r-gray-400"
              placeholder="Search"
            />{" "}
            <IoMdSearch size={20} className="text-gray-400" />
          </div>
        </div>
        <table className="w-full mt-5 ">
          <thead className="">
            <tr className="text-base font-medium border-b-2 border-b-gray-700">
              <th className="py-3">Transaction ID</th>
              <th>User Name</th>
              <th>Course Title</th>
              <th>Amount </th>
              <th>Payment Method</th>
              <th>Time of Transaction </th>
              <th>Status </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((value) => (
              <tr
                key={value}
                className="text-center text-sm text-gray-400 font-normal   border-b-2 border-b-gray-300">
                <td className="py-4">ase542</td>
                <td>Rayan</td>
                <td>rayankhanfeg</td>
                <td>Learner</td>
                <td>Active</td>
                <td>Student</td>
                <td>Student</td>
                <td className="">
                  <div className="flex items-center gap-1 justify-center">
                    <button className="bg-orange-100 text-orange-500 p-1 rounded-full hover:bg-orange-500 hover:text-orange-100 transition-all duration-200">
                      <FaRegEye />
                    </button>
                    <button className="bg-green-100 text-green-500 p-1 rounded-full hover:bg-green-500 hover:text-green-100 transition-all duration-200">
                      <AiOutlineEdit />
                    </button>
                    <button className="bg-red-100 text-red-500 p-1 rounded-full hover:bg-red-500 hover:text-red-100 transition-all duration-200">
                      <MdDeleteOutline />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Transactions;
