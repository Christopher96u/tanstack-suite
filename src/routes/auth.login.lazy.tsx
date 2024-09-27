import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute('/auth/login')({
  component: () => <LoginPage />,
});

function LoginPage() {
  return <>Hello from /login!</>;
}
