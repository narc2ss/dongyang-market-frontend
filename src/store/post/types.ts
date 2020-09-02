export type Id = number | null;

export type WriteType = {
  title: string;
  price: number;
  description: string;
};

export type PostType = null | {
  id?: number;
  seller?: Id;
  title?: string;
  price?: number;
  description?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};
