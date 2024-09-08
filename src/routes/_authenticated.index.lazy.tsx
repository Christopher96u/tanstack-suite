import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/")({
  component: () => (
    <div>Hello /_authenticated/! - Show display Home component</div>
  ),
});
