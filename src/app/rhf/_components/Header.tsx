"use client";

import { useRef } from "react";

export default function Header() {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div className="mb-10">
      <span className="fixed top-5 right-8 z-50 font-normal py-2 px-4 rounded-md">
        Render Count: {renderCount.current}
      </span>
      <h1 className="mt-20 text-2xl flex items-center">React Hook Form</h1>
      <p className="text-sm leading-snug mb-0">
        Performant, flexible and extensible forms with easy-to-use validation.
      </p>
    </div>
  );
}
