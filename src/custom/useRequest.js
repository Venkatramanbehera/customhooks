import { useState } from "react";

const useRequest = ({ url, method, body }) => {
  const [error, setError] = useState(null);

  const makeRequest = async () => {
    try {
      const res = await fetch(url, { method, body });
      setError(null);
      return res.formData;
    } catch (err) {
      setError(
        <div>
          <h4>Error</h4>
          <ul>
            {err.response.data.errors.map((item) => {
              <li>{item.message}</li>;
            })}
          </ul>
        </div>
      );
    }
  };
  return [makeRequest, error];
};

export { useRequest };
