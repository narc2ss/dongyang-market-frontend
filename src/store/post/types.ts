import { SpawnSyncOptionsWithBufferEncoding } from "child_process";

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
