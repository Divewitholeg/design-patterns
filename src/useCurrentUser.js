import { useState, useEffect } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch("/current-user")
        .then((response) => response.json())
        .then((data) => setUser(data));
    })();
  }, []);

  return user;
};
