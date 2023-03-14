import { useState } from "react";

const useFetch = (callback: Function): [Function, boolean, string] => {
  const [isLoading, setIsLoading] = useState<boolean>(true); //поискать как сделать с false
  const [error, setError] = useState<string>("");

  const fetching: Function = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};

export default useFetch;
