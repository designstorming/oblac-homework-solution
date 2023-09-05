
/* NOT USED CURRENTLY */

export const Sort = {
  ASC: 'asc',
  DESC: 'desc'
} as const;

export type SortType = typeof Sort[keyof typeof Sort]

export interface RequestParams {
  sort: SortType;
  orderBy: string;
  perPage: number;
  page: number
  search: string;
}

export const initialRequestParams: RequestParams = {
  sort: Sort.ASC,
  orderBy: 'name',
  perPage: 20,
  page: 1,
  search: ''
}
