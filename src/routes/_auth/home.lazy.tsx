import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/home')({
  component: () => <div>Hello from /_auth/home!</div>
})