import { useState, useEffect } from "react";

export const useResource = (resourceURL) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch(resourceURL)
        .then((response) => response.json())
        .then((data) => setResource(data));
    })();
  }, [resourceURL]);

  return resource;
};
