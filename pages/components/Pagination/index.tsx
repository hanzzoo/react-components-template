import { useState, useEffect } from "react";
import { ItemType } from "../../hooks/useFetchData";
import { StyledPagination, StyledPaginationList } from "./style/";

export const Pagination = (taskItems: ItemType[]) => {
  const [showPageItems, setShowPageItems] = useState<ItemType[]>([]);

  useEffect(() => {
    setShowPageItems(taskItems.slice(0, 10));
  }, [taskItems]);

  const PaginationController = () => {
    return (
      <StyledPagination>
        <StyledPaginationList>1</StyledPaginationList>
        <StyledPaginationList>2</StyledPaginationList>
      </StyledPagination>
    );
  };

  return {
    showPageItems,
    PaginationController,
  };
};
