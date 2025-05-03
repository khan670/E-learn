import Button from "@/components/Button";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section>
      <div className="p-5 shadow w-full bg-white flex items-center">
        <FaUserCircle className="ml-auto" size={30} />
      </div>
      <div className="px-10 py-6 text-[#1A2D62] grid grid-cols-4 gap-5">
        {["Total Students", "Total Courses", "Instructors", "Free Courses"].map(
          (value) => (
            <>
              <div className="p-4 shadow bg-white rounded-sm" key={value}>
                <h1 className="text-base font-semibold">{value}</h1>
                <p className="text-2xl font-bold text-green-400">380</p>
              </div>
            </>
          )
        )}
      </div>
      <div className="grid grid-cols-[30%_70%] gap-5 mt-5 px-10 ">
        <div className="bg-white p-3 shadow rounded-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-[#1A2D62] font-semibold text-lg">
              Instructors List
            </h1>
            <Button text="Add Instructor" className="!text-xs !p-2" />
          </div>
          <hr className="text-gray-200 my-2" />
          {[1, 2, 3, 4].map((value) => (
            <>
              <div className="flex items-center gap-2" key={value}>
                <div className="w-10 h-10 overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-base font-semibold">
                    Hadib Khan{" "}
                    <span className="text-sm font-bold text-green-400">
                      (Digital Marketing)
                    </span>
                  </h1>
                  <p className="text-sm font-medium text-red-500">Instructor</p>
                </div>
              </div>
              <hr className="text-gray-200 my-2" key={value} />
            </>
          ))}
        </div>
        <div className="bg-white  p-3 shadow rounded-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-[#1A2D62] font-semibold text-lg">
              Recent Students
            </h1>
            <Button text="View All Students" className="!text-xs !p-2" />
          </div>
          <hr className="text-gray-200 my-2" />
          <table className="w-full mt-5">
            <thead>
              <tr className="text-sm font-medium text-gray-500 border-b border-b-gray-400 ">
                <th className="py-2">Picture</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Joined Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((value) => (
                <tr key={value} className="text-center text-sm text-slate-900 ">
                  <td className="py-3">🖼️</td>
                  <td>Rayan Khan</td>
                  <td>rayan@email.com</td>
                  <td>React Basics</td>
                  <td>Jan 20, 2025</td>
                  <td>
                    {" "}
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-500 inline-block">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
