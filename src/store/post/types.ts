export type WriteType = {
  seller: number;
  title: string;
  price: number;
  description: string;
};

export type PostType = {
  id?: number;
  seller?: number;
  title?: string;
  price?: number;
  description?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};
