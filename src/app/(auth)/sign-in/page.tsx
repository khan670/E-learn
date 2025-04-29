import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Link from "next/link";
import React from "react";

const Authntication = () => {
  return (
    <section className="flex items-center justify-center w-full h-screen">
      <div className="bg-white p-10  w-1/3 shadow flex  flex-col items-center">
        <h1 className="text-4xl text-[#1A2D62] font-bold  text-center tracking-wide">
          Log in
        </h1>
        <form action="" className="w-full flex flex-col gap-3 mt-5">
          <InputField label="Email" type="email" className="w-full flex-1" />
          <InputField
            label="Password"
            type="password"
            className="w-full flex-1"
          />

          <p className="text-sm font-medium text-[#1A2D62]">
            {" "}
            Don&apos;t have account?{" "}
            <Link
              href={"/sign-up"}
              className="text-sm font-medium underline text-blue-500">
              Create Account
            </Link>
          </p>
          <Button text="Login" className="w-full mt-5" />
        </form>
      </div>
    </section>
  );
};

export default Authntication;
