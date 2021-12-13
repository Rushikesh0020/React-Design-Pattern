import logo from "./logo.svg";
import "./App.css";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => (
  <div style={{ backgroundColor: "green" }}>
    <h1>Left Component : {name}</h1>
  </div>
);

const RightHandComponent = ({message}) => (
  <div style={{ backgroundColor: "red" }}>
    <h1>Right Component : {message}</h1>
  </div>
);


// Design Patterns are effective solutions to common application development challenges
function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
            <LeftHandComponent name={"Elon"}/>
            <RightHandComponent message={"Hello"}/>
    </SplitScreen>
    ); 
}

export default App;
