import React from "react";
import { FaUserCircle } from "react-icons/fa";

const SettingAdmin = () => {
  return (
    <section className="py-5 px-10">
      <h1 className="text-2xl font-bold text-slate-700">Settings</h1>
      <div className="mt-10">
        <FaUserCircle size={100} />
        <div className="flex relative flex-col  gap-1 items-start">
          <p className="text-sm font-medium absolute top-0 right-0 underline text-green-500">
            Edit
          </p>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="bg-white p-2 text-sm shadow"
            value={"Rayan"}
            disabled
          />
        </div>
      </div>
    </section>
  );
};

export default SettingAdmin;
