import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(auth)/auth/confirm-password')({
  component: () => <div>Hello /(auth)/auth/confirm-password!</div>
})