import React from "react";

const Reports = () => {
  return (
    <section className="py-5 px-10">
      <h1 className="text-xl font-semibold text-slate-700">Trasations</h1>
      <div className=" mt-5 text-[#1A2D62] grid grid-cols-4 gap-5">
        {[
          "User Activities",
          "Course Activity",
          "Completion Rate",
          "Certifications",
        ].map((value) => (
          <>
            <div className="p-4 shadow bg-white rounded-sm" key={value}>
              <h1 className="text-base font-semibold">{value}</h1>
              <p className="text-2xl font-bold text-green-400">380</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Reports;
