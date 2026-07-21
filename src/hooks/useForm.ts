"use client";

import { useState } from "react";

export function useForm<T extends Record<string, any>>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
}
