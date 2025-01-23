const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getUsersList = (page: number) => {
  return `${BASE_URL}?results=10&page=${page}`;
};

export { getUsersList };
