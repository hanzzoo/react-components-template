import { useFetchData } from "../hooks/useFetchData";
import { Pagination } from "../components/Pagination";

const Sample = () => {
  const { isLoading, isError, items } = useFetchData();
  const { showPageItems, PaginationController } = Pagination(items);
  console.log(showPageItems);

  return (
    <ul>
      {!isLoading && <p>...Loading</p>}
      {isError && <p>server error</p>}
      {PaginationController()}
    </ul>
  );
};
export default Sample;
