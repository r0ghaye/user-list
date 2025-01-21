import { useEffect, useState } from "react";

import { User } from "../types/user.interface";
import { getUsersList } from "../services/userService";

export default function useFetchUsers(page: number) {
  const [users, setUsers] = useState<User[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const response = await fetch(getUsersList(page));
        const data = await response.json();
        setUsers((users) => [...users, ...data.results]);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [page]);

  return { users, loading };
}
