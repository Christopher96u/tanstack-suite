import { getUsers } from "@/services/apis/getUsers";
import { queryKeys, userQueryKeys } from "@/services/apis/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/users")({
  component: () => <UsersPage />,
});

function UsersPage() {
  const { data } = useQuery({
    queryFn: getUsers,
    queryKey: userQueryKeys.all,
  });
  console.log(data);
  if (!data) return;
  return (
    <div>
      <div>
        {data.data.map((user) => {
          return <div key={user.id}>{user.firstname}</div>;
        })}
      </div>
    </div>
  );
}
