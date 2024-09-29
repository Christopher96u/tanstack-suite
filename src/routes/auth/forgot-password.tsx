import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/forgot-password')({
  component: () => <div>Hello from /auth/forgot-password!</div>
})