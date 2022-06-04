import { useFetchData } from "../hooks/useFetchData";

const Sample = () => {
  const { isLoading, isError, items } = useFetchData();
  // console.log(isLoading, isError, items)

  return (
    <ul>
      {!isLoading && <p>...Loading</p>}
      {isError && <p>server error</p>}
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
export default Sample;
