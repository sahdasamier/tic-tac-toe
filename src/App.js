import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import Start from "./components/start/Start";
import Modal from "./components/modal/Modal"
import Board from "./components/board/Board"
function App() {
  const {screen}  = useContext(GameContext);
  return (
    <div className="App">
      <div className="container">
        {screen === "start" ? <Start /> : <Board /> }
      </div>
      <Modal />
    </div>
  );
}

export default App;