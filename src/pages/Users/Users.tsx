import useFetchUsers from "../../hooks/useFetchUsers";

import classes from "./Users.module.scss";
import UserList from "../../components/UserList/UserList";

const Users: React.FC = () => {
  const { users, loading, loadMore } = useFetchUsers();

  return (
    <div className={`${classes["user-list"]} ${classes.container}`}>
      <h1>Users List</h1>
      <UserList users={users} />

      <div className={classes["user-list__loading"]}>
        {loading && <div>Loading...</div>}
        {!loading && (
          <button
            onClick={loadMore}
            className={classes["user-list__loading__button"]}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Users;
