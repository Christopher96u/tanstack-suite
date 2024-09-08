import { RouterProvider } from "@tanstack/react-router";
import { router } from "./config/router";
import { Button } from "./components/ui/button";

function App() {
  // get Zustand setter to store token
  return (
    <>
      <h1 className="text-blue-500">App.tsx</h1>
      <Button>Click me</Button>
      <RouterProvider defaultPreload="intent" router={router} />
    </>
  );
}

export default App;
