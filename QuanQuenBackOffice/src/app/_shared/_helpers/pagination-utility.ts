export interface Pagination {
    pageNumber: number;
    pageSize: number;
    skip: number;
    totalCount: number;
    totalPage: number;
  }
  
export interface PaginationParam {
    pageNumber: number;
    pageSize: number;
}
  
export interface PaginationResult<T> {
    result: T[];
    pagination: Pagination;
}
  
export interface PaginationResult2<T> {
    data: T[];
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    pageCount: number;
}