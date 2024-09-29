import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/confirm-password')({
  component: () => <div>Hello from /auth/confirm-password!</div>
})