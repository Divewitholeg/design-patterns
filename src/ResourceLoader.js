import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceURL, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get(resourceURL);
      setState(result.data);
    })();
  }, [resourceURL]);

  return state ? (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  ) : (
    <p>Loading...</p>
  );
};
