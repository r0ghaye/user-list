import { useEffect, useState } from "react";

import { User } from "../types/user.interface";
import { getUsersList } from "../services/userService";

export default function useFetchUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      
      try {
        const response = await fetch(getUsersList(page));
        const data = await response.json();
        setUsers((users) => {
          const newUsers = data.results.filter(
            (newUser: User) => !users.some((existingUser) => existingUser.login.uuid === newUser.login.uuid)
          );
          return [...users, ...newUsers];
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [page]);

  const loadMore = () => {
    if (!loading) {
      setPage(page => page + 1)
    }
  }

  return { users, loading, loadMore };
}
