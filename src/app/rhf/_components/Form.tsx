"use client";

export function Form() {
  return (
    <form className="space-y-4">
      <input
        placeholder="First name"
        className="w-full p-3 text-sm border border-black rounded-md bg-transparent"
      />
      <select className="w-full p-3 text-sm border border-black rounded-md bg-transparent">
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea
        placeholder="About you"
        className="w-full p-3 text-sm border border-black rounded-md bg-transparent"
      />
      <input
        type="submit"
        className="w-full p-5 mt-5 text-sm font-semibold tracking-widest uppercase bg-[#ec5990] rounded-md cursor-pointer hover:bg-[#bf1650] transition-colors duration-300"
      />
    </form>
  );
}
