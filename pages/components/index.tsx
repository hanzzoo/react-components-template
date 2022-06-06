import { useFetchData } from "../hooks/useFetchData";
import { Pagination } from "../components/Pagination";

const Sample = () => {
  const { isLoading, isError, items } = useFetchData();
  const { showPageItems, PaginationController } = Pagination(items);

  return (
    <>
      {!isLoading && <p>...Loading</p>}
      {isError && <p>server error</p>}
      <ul>
        {showPageItems.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      {PaginationController}
    </>
  );
};
export default Sample;
