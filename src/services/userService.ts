const BASE_URL = "https://randomuser.me/api";

const getUsersList = (page: number) => {
  return `${BASE_URL}/?results=10&page=${page}`;
};

export { getUsersList };
