import { useSesionStoreApi, useSessionStoreSelector } from "@/stores/session";
import { Test2 } from "./Test2";

const Test1 = () => {
  //const globalCount = useGlobalStore(store => store.items)
  //const increment = useGlobalStore(store => store.increaseItems)
  //const dogsCount = useGlobalStore(store => store.dogs)
  //const incrementDogs = useGlobalStore(store => store.increaseDogs)
  const koalasCount = useSessionStoreSelector(
    (store) => store.koalasStore.koalas,
  );
  const { incrementKoalas, incrementKoalasBy } = useSesionStoreApi().getState();
  return (
    <div>
      <div>Test1</div>
      <div>Current koalas {koalasCount}</div>
      <button onClick={incrementKoalas} className="bg-slate-500">
        {" "}
        Increment +1 koala
      </button>
      <div className="my-4"></div>
      <button onClick={() => incrementKoalasBy(5)} className="bg-slate-500">
        {" "}
        Increment + 5 koalas
      </button>
      <Test2 />
    </div>
  );
};
export { Test1 };
