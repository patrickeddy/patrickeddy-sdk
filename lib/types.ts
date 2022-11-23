export interface ClientOptions {
  accessToken: string;
  apiVersion?: string;
}

export interface RequestOptions {
  // pagination
  total: number;
  limit: number;
  offset: number;
  page: number;
  // sorting
  sort: Record<string, 'asc' | 'desc'>;
  // filters
  match: Record<string, any>;
  negateMatch: Record<string, any>;
  include: Record<string, any>;
  exclude: Record<string, any>;
  exists: Record<string, any>;
  doesntExist: Record<string, any>;
  regex: Record<string, string>;
  lt: Record<string,number>;
  gt: Record<string, number>;
  gte: Record<string, number>;
}

export interface EntityFetchResponse<T> {
  data: T | null;
  error?: string;
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}