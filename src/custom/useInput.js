import { useState } from "react";

const useInput = (intialValue) => {
  const [value, setValue] = useState(intialValue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
