import "./App.css";
import { SplitScreen } from "./components/screen-splitter";

const LeftSideComp = () => {
  return <h2 style={{ backgroundColor: "crimson" }}>I am Left!</h2>;
};

const RightSideComp = () => {
  return <h2 style={{ backgroundColor: "orange" }}>I am Right!</h2>;
};

function App() {
  return (
    <SplitScreen
      Left={LeftSideComp}
      Right={RightSideComp}
      leftWidth={1}
      rightWidth={3}
    />
  );
}

export default App;
