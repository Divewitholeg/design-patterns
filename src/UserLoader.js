import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get(`/users/${userId}`);
      setUser(result.data);
    })();
  }, [userId]);

  return user ? (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  ) : (
    <p>Loading...</p>
  );
};
