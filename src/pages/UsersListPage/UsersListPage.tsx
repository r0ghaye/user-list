import { useState, useEffect, useRef, useCallback } from "react";

import UserCard from "../../components/UserCard/UserCard";

import classes from "./UsersListPage.module.scss";

function UsersListPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver>();
  const lastUserElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?results=10&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers((users) => [...users, ...data.results]);
        setLoading(false);
      });
  }, [page]);

  if (loading && page === 1) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${classes["user-list"]} ${classes.container}`}>
      <h1>Users List</h1>
      {users.map((user, index) => {
        if (users.length === index + 1) {
          return (
            <div ref={lastUserElementRef} key={user.login.uuid}>
              <UserCard user={user} />
            </div>
          );
        } else {
          return <UserCard key={user.login.uuid} user={user} />;
        }
      })}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default UsersListPage;
