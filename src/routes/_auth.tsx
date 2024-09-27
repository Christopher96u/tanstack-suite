import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
  beforeLoad: async () => {
    // double check if needs to be async
    // get user/token from store and validate
    // if is not loged in - push the user to login screen
    // update store - clean store according to needs
    console.log("BeforeLoad _auth guard");
    //Redirect to sign in screen with
    // throw redirect({to: '/auth/sign-in'})
  },
});
