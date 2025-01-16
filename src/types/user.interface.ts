export interface User {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
    username: string;
  };
  gender: string;
  phone: string;
  email: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
  };
  picture: {
    large: string;
  };
  nat: string;
}