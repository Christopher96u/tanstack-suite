
import { useGlobalStore } from "@/stores/local";
import { Test2 } from "./Test2";

const Test1 = () => {
  const globalCount = useGlobalStore(store => store.items)
  const increment = useGlobalStore(store => store.increaseItems)
  const dogsCount = useGlobalStore(store => store.dogs)
  const incrementDogs = useGlobalStore(store => store.increaseDogs)
  return <div>
    <div>Test1</div>
    <div>Current items {globalCount}</div>
    <div>Current items {dogsCount}</div>
    <button onClick={increment} className="bg-slate-500"> Increment items</button>
  <div className="my-4"></div>
    <button onClick={incrementDogs} className="bg-slate-500"> Increment dogs</button>
    <Test2 />
  </div>;
};
export { Test1 };
