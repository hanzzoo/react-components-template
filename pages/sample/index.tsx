import { useFetchData } from "./hooks/useFetchData";

const Sample = () => {
  const { isLoading, isError, items } = useFetchData();
  // console.log(isLoading, isError, items)

  return <h1>welcome to next.js!</h1>;
};
export default Sample;
