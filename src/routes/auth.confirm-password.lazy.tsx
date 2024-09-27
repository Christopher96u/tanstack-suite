import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/confirm-password')({
  component: () => <div>Hello from /auth/confirm-password!</div>
})