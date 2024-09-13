import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/b')({
  component: () => <div>Hello /b!</div>
})