import { FixedSizeList } from "react-window";
import { User } from "../../types/user.interface"; // Adjust the import path as necessary

import UserCard from "../UserCard/UserCard";
import { UsersProps } from "./UserList.types";

const Row: React.FC<{
  index: number;
  style: React.CSSProperties;
  data: User[];
}> = ({ index, style, data }) => {
  const user = data[index];
  return (
    <div style={style}>
      <UserCard user={user} />
    </div>
  );
};

const UserList: React.FC<UsersProps> = ({users}) => {
  return (<FixedSizeList
  height= {600}
  width= '100%'
  itemSize={120}
  itemCount={users.length}
  itemData={users}
  >
{Row}
  </FixedSizeList>)
}

export default UserList;
