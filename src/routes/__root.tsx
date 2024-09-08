import { createRootRouteWithContext } from "@tanstack/react-router";
import { Root } from "../components/Root";
import { QueryClient } from "@tanstack/react-query";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Root />,
});
