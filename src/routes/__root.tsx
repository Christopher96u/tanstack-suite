import { createRootRouteWithContext } from "@tanstack/react-router";
import { Root } from "../components/Root";
import { QueryClient } from "@tanstack/react-query";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => <Root />,
});
// Fix routes to have a better context
// then test that routes works as expected
// after that, add useQuery calls in one route and start adding tests
// setup unit test, hook test, mocks
// setup e2e tests with playwright
//