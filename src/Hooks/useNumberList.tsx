import { useState } from "react";

export const useNumberList = (initialValues: number[]) => {
  const [list, setList] = useState(initialValues);

  const appendStart = (value: number) => {
    setList([value, ...list]);
  };

  const appendEnd = (value: number) => {
    setList([...list, value]);
  };

  const popStart = () => {
    setList(list.slice(1));
  };

  const popEnd = () => {
    setList(list.slice(0, -1));
  };

  const clear = () => {
    setList([]);
  };

  const reset = (values: number[]) => {
    setList(values);
  };

  return { list, appendStart, appendEnd, popStart, popEnd, clear, reset };
};
