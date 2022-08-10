export const checkWin = (data) => {
  const checkRow = () => {
    let ans = false;
    for (let i = 0; i < 9; i += 3) {
      ans |=
        data[i] === data[i + 1] && data[i] === data[i + 2] && data[i] !== "";
    }
    return ans;
  };

  // Checks for the win condition in cols
  const checkCol = () => {
    let ans = false;
    for (let i = 0; i < 3; i++) {
      ans |=
        data[i] === data[i + 3] && data[i] === data[i + 6] && data[i] !== "";
    }
    return ans;
  };

  // Checks for the win condition in diagonals
  const checkDiagonal = () => {
    return (
      (data[0] === data[4] && data[0] === data[8] && data[0] !== "") ||
      (data[2] === data[4] && data[2] === data[6] && data[2] !== "")
    );
  };

  // Checks if at all a win condition is present

  return checkRow() || checkCol() || checkDiagonal();
};

// Checks for a tie
export const checkTie = (data) => {
  let count = 0;
  data.forEach((cell) => {
    if (cell !== "") {
      count++;
    }
  });
  return count === 9;
};
