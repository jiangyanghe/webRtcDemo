export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';

export interface IRequestUrl {
  url: string;
}

export interface IRequestPath {
  path: string;
  server: string;
}

export interface IRequestRest {
  method?: Method;
  params?: Record<string, any>;
  data?: Record<string, any>;
  isLoading?: boolean;
}

export type IUrlOpts = IRequestUrl & IRequestRest;

export type IPathOpts = IRequestPath & IRequestRest;

export type IRequestOpts = IUrlOpts | IPathOpts;
