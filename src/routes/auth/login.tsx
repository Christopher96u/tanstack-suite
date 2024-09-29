import { LoginForm } from "@/components/Forms/LoginForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/login")({
  component: () => <LoginPage />,
});

function LoginPage() {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <LoginForm />
    </div>
  );
}
