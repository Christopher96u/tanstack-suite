import { Test1 } from '@/components/Test1'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a')({
  component: () => { 
    return (<div>
    <div>Hello /a!</div>
    <Test1 />
  </div>)}
})