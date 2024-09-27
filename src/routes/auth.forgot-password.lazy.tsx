import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/auth/forgot-password')({
  component: () => <div>Hello from /auth/forgot-password!</div>
})