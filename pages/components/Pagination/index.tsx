import { useState, useEffect, useCallback, useMemo } from "react";
import { ItemType } from "../../hooks/useFetchData";
import { StyledPagination, StyledPaginationList } from "./style/";

type InitialShowPage = {
  current: number;
  prev: number;
};

export const Pagination = (taskItems: ItemType[]) => {
  const [showPageItems, setShowPageItems] = useState<ItemType[]>([]);
  const initialPageNumbers = [1, 2, 3, 4, 5];
  const prevThreshold = 20;
  const [initialShowPage, setInitialShowPage] = useState<InitialShowPage>({
    current: 0,
    prev: prevThreshold,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setShowPageItems(
      taskItems.slice(initialShowPage.current, initialShowPage.prev)
    );
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
          prev: 20,
        }));
      } else {
        setInitialShowPage((prevState) => ({
          ...prevState,
          current: prevThreshold * currentNumber,
          prev: prevThreshold * currentNumber + prevThreshold,
        }));
      }
    },
    []
  );

  const PaginationController = useMemo(() => {
    return (
      <StyledPagination>
        <li>prev</li>
        {initialPageNumbers.map((num, index) => {
          return (
            <StyledPaginationList
              key={index}
              data-current={num}
              onClick={(event) => handleUpdateCurrent(event)}
              isFocused={currentPage === num}
            >
              {num}
            </StyledPaginationList>
          );
        })}
        <li>next</li>
      </StyledPagination>
    );
  }, [initialShowPage]);

  return {
    showPageItems,
    PaginationController,
  };
};
