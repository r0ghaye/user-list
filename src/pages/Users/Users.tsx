import UserCard from "../../components/UserCard/UserCard";
import { User } from "../../types/user.interface";
import { getUsersList } from "../../services/userService";

import classes from "./Users.module.scss";
import { useEffect, useRef, useState } from "react";

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className={`${classes["user-list"]} ${classes.container}`}>
      <h1>Users List</h1>

      {users.map((user) => (
        <UserCard key={user.login.uuid} user={user} />
      ))}

      <div ref={sentinelRef} style={{ height: 1 }} />

      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Users;
