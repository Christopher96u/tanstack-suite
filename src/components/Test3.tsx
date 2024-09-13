import { createSmallStore, initialSmallStoreState, SmallStoreProvider } from "@/stores/small";
import { Test4 } from "./Test4";

const Test3 = () => {
    return <div>
      <SmallStoreProvider createStore={() => createSmallStore(initialSmallStoreState)}>
        <div>Test 3</div>
        <Test4 />
      </SmallStoreProvider>
    </div>;
  };
  export { Test3 };