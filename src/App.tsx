import "./styles.css";
import Clock from "./Components/Clock";
import List1 from "./Components/List1";
import List2 from "./Components/List2";

const App: React.FC = () => {
  return (
    <>
      <div className="clock">
        <Clock label={"24 Hour Live Custom Componenet Clock "} />
      </div>
      <div className="List1">
        <List1 initialValues={[1, 2, 3]} label="List 1" />
      </div>
      <div className="list2">
        <List2 initialValues={[4, 5, 6]} label="List 2" />
      </div>
    </>
  );
};

export default App;
