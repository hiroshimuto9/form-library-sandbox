"use client";

import { useState } from "react";
import Header from "./Header";
import { Form } from "./Form";

export default function FormWrapper() {
  const [data, setData] = useState("");

  return (
    <>
      <Header />
      <Form setData={setData} />
      <p className="text-center text-[#bf1650]">{data}</p>
    </>
  );
}
