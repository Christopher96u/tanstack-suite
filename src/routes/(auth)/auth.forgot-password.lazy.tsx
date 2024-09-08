import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/(auth)/auth/forgot-password')({
  component: () => <div>Hello /(auth)/auth/forgot-password!</div>
})