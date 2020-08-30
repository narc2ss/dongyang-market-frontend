import { useState } from "react";

const useInputs = (initialState: any) => {
  const [inputs, setInputs] = useState(initialState);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return { inputs, onChange };
};

export default useInputs;
