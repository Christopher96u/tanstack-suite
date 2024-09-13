import { useEffect } from "react";

const Test4 = () => {
  useEffect(() => {
    console.log('Render <Test4 /> ')
  }, [])
    return <div>Test4</div>;
  };
  export { Test4 };