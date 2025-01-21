import { useRef, useState } from "react";

import UserCard from "../../components/UserCard/UserCard";

import useFetchUsers from "../../hooks/useFetchUsers";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

import classes from "./Users.module.scss";

function Users() {
  const [page, setPage] = useState<number>(1);
  const { users, loading } = useFetchUsers(page);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const fetchMoreUsers = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(fetchMoreUsers, sentinelRef);

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
