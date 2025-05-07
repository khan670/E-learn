"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(3).max(15),
  email: z.string().email({ message: "Please Enter the Valid Email" }),
  password: z.string().min(2).max(20),
});

type FormType = z.infer<typeof UserSchema>;
const SignUp = () => {
  const { register, handleSubmit } = useForm<FormType>({
    resolver: zodResolver(UserSchema),
  });
  const router = useRouter();
  const formSubmition = async (data: FormType) => {
    // console.log(data);
    try {
      const datas = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-type": "type/json",
        },
        body: JSON.stringify(data),
      });
      console.log(datas);
      router.push("/");
    } catch {
      router.push("/sign-in");
    }
  };
  return (
    <section className="flex items-center justify-center w-full h-screen mt-5">
      <div className="bg-white p-10  w-1/3 shadow flex  flex-col items-center">
        <h1 className="text-4xl text-[#1A2D62] font-bold  text-center tracking-wide">
          Sign Up
        </h1>
        <form
          className="w-full flex flex-col gap-3 mt-5"
          onSubmit={handleSubmit(formSubmition)}>
          <InputField
            {...register("name")}
            label="Full Name"
            type="text"
            className="w-full flex-1"
          />
          <InputField
            label="Email"
            {...register("email")}
            type="email"
            className="w-full flex-1"
          />
          <InputField
            label="Password"
            type="password"
            {...register("password")}
            className="w-full flex-1"
          />
          <p className="text-sm font-medium text-[#1A2D62]">
            Already have account?{" "}
            <Link
              href={"/sign-in"}
              className="text-sm font-medium underline text-blue-500">
              Login
            </Link>
          </p>
          <Button text="Sign Up" className="w-full mt-5" />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
