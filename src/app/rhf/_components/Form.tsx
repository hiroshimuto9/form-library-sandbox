"use client";

import ClientOnly from "@/app/_components/ClientOnly";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

type FormValues = {
  name: {
    firstName: string;
    lastName: string;
  };
  category: string;
  about: string;
  age: number;
  likes: { value: string; label: string }[];
  gender: string;
  week: string[];
};

export function Form() {
  const {
    watch,
    control,
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
      likes: [{ value: "chocolate", label: "Chocolate" }],
      gender: "1",
      week: ["1"],
    },
  });
  const formValues = watch();

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
      {errors.name?.firstName && <p>{errors.name.firstName.message}</p>}
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
      <div>
        <label>
          <input
            type="radio"
            value="1"
            {...register("gender", { required: "Gender is required" })}
          />
          男性
        </label>
        <label>
          <input
            type="radio"
            value="2"
            {...register("gender", { required: "Gender is required" })}
          />
          女性
        </label>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>
      <div>
        <label>
          <input
            value="1"
            type="checkbox"
            {...register("week")}
            className="mr-2"
          />
          春
        </label>
        <label>
          <input
            value="2"
            type="checkbox"
            {...register("week")}
            className="mr-2"
          />
          夏
        </label>
        <label>
          <input
            value="3"
            type="checkbox"
            {...register("week")}
            className="mr-2"
          />
          秋
        </label>
        <label>
          <input
            value="4"
            type="checkbox"
            {...register("week")}
            className="mr-2"
          />
          冬
        </label>
      </div>
      <ClientOnly>
        <Controller
          name="likes"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" },
              ]}
            />
          )}
        />
      </ClientOnly>
      <input
        type="submit"
        className="w-full p-5 mt-5 text-sm font-semibold tracking-widest uppercase bg-[#ec5990] rounded-md cursor-pointer hover:bg-[#bf1650] transition-colors duration-300"
      />
      <div>
        <pre>{JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </form>
  );
}
