//Ref: https://tkdodo.eu/blog/effective-react-query-keys
export const userQueryKeys = {
  all: ["users"] as const,
  lists: () => [...userQueryKeys.all, "list"] as const,
  list: (filters: string) => [...userQueryKeys.lists(), { filters }] as const,
  details: () => [...userQueryKeys.all, "detail"] as const,
  detail: (id: number) => [...userQueryKeys.details(), id] as const,
};
