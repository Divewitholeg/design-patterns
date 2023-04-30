import { SplitScreen } from "./SplitScreen";

const LeftHandSide = ({ name }) => {
  return <div style={{ backgroundColor: "fuchsia" }}>{name}</div>;
};

const RightHandSide = ({ message }) => {
  return <div style={{ backgroundColor: "teal" }}>{message}</div>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandSide name={"Oleg"} />
      <RightHandSide message={"Hi from the right!"} />
    </SplitScreen>
  );
}

export default App;
