"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  name: {
    firstName: string;
    lastName: string;
  };
  category: string;
  about: string;
  age: number;
};

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: {
        firstName: "bill",
        lastName: "luo",
      },
      category: "B",
      about: "This is a test",
      age: 0,
    },
  });
  console.log("errors", errors);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("name.firstName", {
          required: "firstName is required",
          maxLength: 5,
        })}
        placeholder="First name"
        className="w-full p-3 text-sm border border-black rounded-md bg-transparent"
      />
      <select
        {...register("category")}
        className="w-full p-3 text-sm border border-black rounded-md bg-transparent"
      >
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea
        {...register("about")}
        placeholder="About you"
        className="w-full p-3 text-sm border border-black rounded-md bg-transparent"
      />
      <input
        {...register("age", { valueAsNumber: true })}
        type="number"
        placeholder="10"
        className="w-full p-3 text-sm border border-black rounded-md bg-transparent"
      />
      <input
        type="submit"
        className="w-full p-5 mt-5 text-sm font-semibold tracking-widest uppercase bg-[#ec5990] rounded-md cursor-pointer hover:bg-[#bf1650] transition-colors duration-300"
      />
    </form>
  );
}
