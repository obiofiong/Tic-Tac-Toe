// const data = ["", "", "", "", "", "", "", "O", "X"];

import { createEffect, createSignal, For } from "solid-js";
import {
  currentPlayer,
  setCurrentPlayer,
  setWinner,
  data,
  setData,
  score,
  setScore,
} from "../App";
import { checkTie, checkWin } from "../utils/gameRunner";

// const [winner, setWinner] = createSignal("");

const Board = () => {
  const addEntity = (index) => {
    const tempData = data();
    tempData[index] = currentPlayer() === "Player 1" ? "X" : "O";
    setData(tempData);
    // console.log(currentPlayer());
    // Setting the winner in case of a win
    if (checkWin(data())) {
      setScore((prev) => {
        let temp = prev;
        if (currentPlayer() === "Player 1") {
          // return prev[0] ===
          temp[0] = temp[0] + 1;
        } else {
          temp[1] = temp[1] + 1;
        }
        return temp;
      });
      // console.log("There is a winner!", score());
      setWinner(
        currentPlayer() === "Player 2" ? "Player 2 Wins!" : "Player 1 Wins!"
      );
    } else if (checkTie(data())) {
      // Setting the winner to tie in case of a tie
      setWinner("It's a Tie!");
      // console.log("There is NOOOOO winner");
    }
    setCurrentPlayer(currentPlayer() === "Player 1" ? "Player 2" : "Player 1");
    // console.log(currentPlayer());
  };

  // createEffect
  createEffect(() => {
    // console.log("create effect", data(), currentPlayer());
  });

  return (
    <>
      <div className="grid grid-cols-3 gap-1 xs:gap-2">
        <For each={data()}>
          {(cell, i) => (
            <p
              className="h-[6rem] w-[6rem] bg-white border-white flex justify-center items-center text-[#2b6b93] text-2xl font-bold cursor-pointer"
              onClick={() => {
                if (cell === "X" || cell === "O") {
                  return;
                }
                addEntity(i());
              }}
            >
              {cell}
            </p>
          )}
        </For>
      </div>
    </>
  );
};

export default Board;
// export { winner, setWinner };
