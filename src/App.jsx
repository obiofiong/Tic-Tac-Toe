import { createEffect, createSignal } from "solid-js";
import Board from "./components/Board";

// const dummyData =;

const [currentPlayer, setCurrentPlayer] = createSignal("Player 1");
const [data, setData] = createSignal(["", "", "", "", "", "", "", "", ""], {
  equals: false,
});
const [winner, setWinner] = createSignal(null);
const [score, setScore] = createSignal([0, 0]);

// const [data, setData] = createSignal(["", "", "", "", "", "X", "", "O", "X"]);

function App() {
  // createEffect(() => {
  //   console.log("winner", winner());
  //   console.log(score());
  // });
  return (
    <div class="p-6 xs:p-20 flex justify-start items-center flex-col h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <h1 class="text-blue-900 font-bold text-2xl">Tic tac toe</h1>
      {!(score()[0] === 0 && score()[1] === 0) && (
        <h3>
          Agregate : {score[0]} : {score[1]}
        </h3>
      )}
      {winner() === null ? (
        <>
          <p class="text-2xl my-14 font-bold">{currentPlayer()}'s TURN</p>
          <Board />
        </>
      ) : (
        <>
          <p class="text-5xl my-14 font-bold">Game Over</p>
          <p class="text-2xl my-14 font-bold">{winner()}</p>
          <button
            class="rounded bg-white py-3 px-8 text-gray-600"
            onClick={() => {
              setWinner(null);
              setData(["", "", "", "", "", "", "", "", ""]);
            }}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export {
  currentPlayer,
  setCurrentPlayer,
  winner,
  setWinner,
  data,
  setData,
  score,
  setScore,
};
export default App;
