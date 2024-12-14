"use client";

import { useForm } from "react-hook-form";

type FormProps = {
  setData: (data: string) => void;
};

export function Form({ setData }: FormProps) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
      className="space-y-4"
    >
      <input
        {...register("firstName")}
        placeholder="First name"
        className="w-full p-3 text-sm border border-white rounded-md bg-transparent"
      />
      <select
        {...register("category", { required: true })}
        className="w-full p-3 text-sm border border-white rounded-md bg-transparent"
      >
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea
        {...register("aboutYou")}
        placeholder="About you"
        className="w-full p-3 text-sm border border-white rounded-md bg-transparent"
      />
      <input
        type="submit"
        className="w-full p-5 mt-5 text-sm font-semibold tracking-widest text-white uppercase bg-[#ec5990] rounded-md cursor-pointer hover:bg-[#bf1650] transition-colors duration-300"
      />
    </form>
  );
}
