import React from "react";
import { useNumberList } from "../Hooks/useNumberList";

interface Props {
  initialValues: number[];
  label: string;
}

const List2: React.FC<Props> = ({ initialValues, label }) => {
  const { list, appendEnd, popStart, clear, reset } = useNumberList(
    initialValues
  );

  return (
    <div className="list2" data-testid="list2">
      <h2>{label}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => appendEnd(Math.floor(Math.random() * 100))}>
        Append End
      </button>
      <button onClick={() => popStart()}>Pop Start</button>
      <button onClick={() => clear()}>Clear</button>
      <button onClick={() => reset(initialValues)}>Reset</button>
    </div>
  );
};

export default List2;
