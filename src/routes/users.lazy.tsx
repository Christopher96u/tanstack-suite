import { getUsers } from "@/services/apis/getUsers";
import { useQuery } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/users")({
  component: () => <UsersPage />,
});

function UsersPage() {
  const {data} = useQuery({
    queryFn: getUsers,
    queryKey: ['getUsers']
  })
  console.log(data)
  return (
    <div>
      <div></div>
    </div>
  );
}
