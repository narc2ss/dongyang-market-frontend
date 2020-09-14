type PostUserType = {
  id?: number;
  nickname?: string;
};

export type PostType = {
  // id?: number;
  // seller?: number;
  // title?: string;
  // price?: number;
  // description?: string;
  // status?: string;
  // createdAt?: string;
  // updatedAt?: string;
  id?: number;
  title?: string;
  price?: number;
  description?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  User?: PostUserType;
};

export type WriteType = {
  seller: number;
  title: string;
  price: number;
  description: string;
};

export type EditType = {
  id: number;
  seller: number;
  title: string;
  price: number;
  status: string;
  description: string;
};

export type RemoveType = {
  id: number;
};
