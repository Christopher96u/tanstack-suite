import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/c')({
  component: () => <div>Hello /c!</div>
})