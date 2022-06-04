import axios, { AxiosResponse, AxiosError } from "axios";
import { useState, useEffect } from "react";

type ItemType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

interface FunctionReturnType {
  isLoading: Boolean;
  isError: Boolean;
  items: ItemType[];
}

interface IErrorResponse {
  error: string;
}

export const useFetchData = (): FunctionReturnType => {
  const baseApiUrl = "https://jsonplaceholder.typicode.com/todos/";
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse = await axios.get(baseApiUrl);
        const status: number = response.status;
        const data = await response.data;

        if (status === 200) {
          setIsLoading(true);
          setItems(await data);
        }
      } catch (error) {
        if (
          (error as AxiosError<IErrorResponse>).response &&
          (error as AxiosError<IErrorResponse>).response?.status === 400
        ) {
          console.log(
            `Response Error:${(error as AxiosError<IErrorResponse>).message}`
          );
        }
        if (error instanceof Error) {
          setIsError(true);
          console.log(`Error:${error.message}`);
        }
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
    items,
  };
};
