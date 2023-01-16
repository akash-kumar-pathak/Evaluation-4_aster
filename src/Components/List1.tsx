import React from "react";
import { useNumberList } from "../Hooks/useNumberList";

interface Props {
  initialValues: number[];
  label: string;
}

const List1: React.FC<Props> = ({ initialValues, label }) => {
  const { list, appendStart, popEnd, clear, reset } = useNumberList(
    initialValues
  );

  return (
    <div className="list1" data-testid="list1">
      <h2>{label}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => appendStart(Math.floor(Math.random() * 100))}>
        Append Start
      </button>
      <button onClick={() => popEnd()}>Pop End</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => reset(initialValues)}>Reset</button>
    </div>
  );
};

export default List1;
