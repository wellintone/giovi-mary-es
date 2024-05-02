"use client";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export interface IUseFindElement {
  initialState: any;
  data: any;
}

const useFindElement = (initialState: any, data: any, filterBy: string) => {
  const router = useParams();
  const [element, setElement] = useState<any>(initialState);

  const findElement = useCallback(
    (name: string | string[]) => {
      return data.map((element: any) => {
        if (
          element[filterBy]?.toLowerCase() === (name as string)?.toLowerCase()
        ) {
          setElement(element);
        }
      });
    },
    [data, filterBy]
  );

  useEffect(() => {
    if (router.name) {
      findElement(router.name);
    } else {
      setElement(initialState);
    }
  }, [findElement, initialState, router.name]);
  return [element];
};

export default useFindElement;
