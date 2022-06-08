import { useState, useEffect } from "react";

export default function useLastUser() {
  const [lastUser, setLastUser] = useState(null);

  useEffect(() => {
    const lastUser = localStorage.getItem("lastUser");
    setLastUser(lastUser);
  }, []);

  return lastUser;
}
