import classes from "./UserCard.module.scss";
import { UserProps } from "./UserCard.types";

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className={classes["user-card"]}>
      <div className={classes["user-card__image"]}>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />

        <img src={`https://flagsapi.com/${user.nat}/flat/64.png`} />
      </div>

      <div className={classes["user-card__info"]}>
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p>
          {user.login.username} {user.gender}
        </p>
      </div>

      <div className={classes["user-card__details"]}>
        <div className={classes["user-card__details__contact"]}>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
        <div className={classes["user-card__details__location"]}>
          <p>
            {user.location.street.number} {user.location.street.name},
            {user.location.city}, {user.location.state}, {user.location.country}
            {user.location.postcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
