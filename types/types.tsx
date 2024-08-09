export type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
};

export type User = {
  $id: string;
  firstName: string;
  lastName: string;
  email: string;
};
