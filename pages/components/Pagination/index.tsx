import { useState, useEffect } from "react";
import { ItemType } from "../../hooks/useFetchData";

export const Pagination = (taskItems: ItemType[]) => {
  const [showPageItems, setShowPageItems] = useState<ItemType[]>([]);

  useEffect(() => {
    setShowPageItems(taskItems.slice(0, 10));
  }, [taskItems]);

  const PaginationController = () => {
    return (
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
    );
  };

  return {
    showPageItems,
    PaginationController,
  };
};
