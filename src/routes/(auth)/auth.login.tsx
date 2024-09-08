import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/auth/login")({
  component: () => <LoginPage />,
});

function LoginPage() {
  return <>Hello /(auth)/auth/login!</>;
}
