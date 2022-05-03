import Timer from "./components/timer";

function App(props) {
  return (
    <div className="App">
      <Timer timer={props.timer}></Timer>
    </div>
  );
}

export default App;
