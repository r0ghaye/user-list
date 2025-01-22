import useFetchUsers from "../../hooks/useFetchUsers";

import classes from "./Users.module.scss";
import UserList from "../../components/UserList/UserList";

const Users: React.FC = () => {
  const { users, loading, loadMore } = useFetchUsers();

  return (
    <div className={`${classes["user-list"]} ${classes.container}`}>
      <h1>Users List</h1>
      <UserList users={users} />

      {loading && <div>Loading...</div>}
      {!loading && <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default Users;
