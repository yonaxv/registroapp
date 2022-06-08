import { useState, useEffect } from "react";

export const useListUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await globalThis.fetch(
        "http://localhost:5000/api/user/getusers"
      );
      const data = await res.json();
      // console.log(data)
      setUsers(data.users);
    })();
  }, []);

  return users;
};
