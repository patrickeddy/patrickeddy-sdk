export interface ClientOptions {
  accessToken: string;
  apiVersion?: string;
}

export interface RequestOptions {
  // pagination
  limit?: number;
  page?: number;
  offset?: number;
  // sorting
  sort?: Record<string, "asc" | "desc">;
  // filters
  match?: Record<string, any>;
  notMatch?: Record<string, any>;
  include?: Record<string, any>;
  exclude?: Record<string, any>;
  exists?: string[];
  notExist?: string[];
  regex?: Record<string, string>;
  notRegex?: Record<string, string>;
  lt?: Record<string, number>;
  gt?: Record<string, number>;
  gte?: Record<string, number>;
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
