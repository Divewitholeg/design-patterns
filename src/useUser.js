import { useState, useEffect } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      await fetch("/users/" + userId)
        .then((response) => response.json())
        .then((data) => setUser(data));
    })();
  }, [userId]);

  return user;
};
