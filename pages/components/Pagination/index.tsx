import { useState, useEffect, useCallback, useMemo } from "react";
import { ItemType } from "../../hooks/useFetchData";
import { StyledPagination, StyledPaginationList } from "./style/";

interface InitialShowPage {
  current: number;
  prev: number;
}

export const Pagination = (taskItems: ItemType[]) => {
  const [showPageItems, setShowPageItems] = useState<ItemType[]>([]);
  const [initialPageNumbers, setInitialPageNumbers] = useState<number[]>([
    1, 2, 3, 4, 5,
  ]);
  const prevThreshold = 10;
  const [initialShowPage, setInitialShowPage] = useState<InitialShowPage>({
    current: 0,
    prev: prevThreshold,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextArrow, setNextArrow] = useState(true);

  useEffect(() => {
    setShowPageItems(
      taskItems.slice(initialShowPage.current, initialShowPage.prev)
    );
    console.log(initialShowPage);
  }, [taskItems, initialShowPage]);

  const handleUpdateCurrent = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const dataCurrentAttr = event.currentTarget.dataset.current;
      const currentNumber: number = Number(dataCurrentAttr);
      setCurrentPage(currentNumber);

      if (currentNumber === 1) {
        setInitialShowPage((prevState) => ({
          ...prevState,
          current: 0,
          prev: prevThreshold,
        }));
      } else {
        if (initialShowPage.prev === showPageItems.length) return false;
        setInitialShowPage((prevState) => ({
          ...prevState,
          current: prevThreshold * currentNumber,
          prev: prevThreshold * currentNumber + prevThreshold,
        }));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handlePageForward = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const dataForwardAttr = event.currentTarget.dataset.forward;

      const updatePrev = () => {
        if (initialPageNumbers[0] === 1) return false;
        setInitialPageNumbers(
          [...initialPageNumbers].map((num) => num - initialPageNumbers.length)
        );
      };
      const updateNext = () => {
        const newArr = [...initialPageNumbers].map(
          (num) => num + initialPageNumbers.length
        );
        setInitialPageNumbers(newArr);
        const last = taskItems.length / prevThreshold;

        if (newArr.includes(last) === true) {
          setInitialPageNumbers(newArr.slice(0, 4));
          setNextArrow(false);
        }
      };

      switch (dataForwardAttr) {
        case "prev":
          return updatePrev();
        case "next":
          return updateNext();
      }
    },
    [initialPageNumbers, taskItems]
  );

  const PaginationController = useMemo(() => {
    return (
      <StyledPagination>
        <li data-forward="prev" onClick={handlePageForward}>
          prev
        </li>
        {initialPageNumbers.map((num, index) => {
          return (
            <StyledPaginationList
              key={index}
              data-current={num}
              onClick={handleUpdateCurrent}
              isFocused={currentPage === num}
            >
              {num}
            </StyledPaginationList>
          );
        })}
        {nextArrow && (
          <li data-forward="next" onClick={handlePageForward}>
            next
          </li>
        )}
      </StyledPagination>
    );
  }, [
    handlePageForward,
    initialPageNumbers,
    nextArrow,
    handleUpdateCurrent,
    currentPage,
  ]);

  return {
    showPageItems,
    PaginationController,
  };
};
