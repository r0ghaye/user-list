import { FixedSizeList } from "react-window";
import { User } from "../../types/user.interface"; // Adjust the import path as necessary

import UserCard from "../UserCard/UserCard";
import { UsersProps } from "./UserList.types";


import useMediaQuery from "@mui/material/useMediaQuery";

const Row: React.FC<{
  index: number;
  style: React.CSSProperties;
  data: User[];
}> = ({ index, style, data }) => {
  const user = data[index];
  return (
    <div style={{ ...style, paddingInline: "8px" }}>
      <UserCard user={user} />
    </div>
  );
};

const UserList: React.FC<UsersProps> = ({ users }) => {
  const isMobile = useMediaQuery("(min-width:768px)");
  const itemSize = isMobile ? 160 : 340;

  return (
    <FixedSizeList
      height={600}
      width="100%"
      itemSize={itemSize}
      itemCount={users.length}
      itemData={users}
    >
      {Row}
    </FixedSizeList>
  );
};

export default UserList;
