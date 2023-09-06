import React from 'react';
import { useGlobalState } from 'src/Functions/States';

const ShowWinner = () => {
  const { winner } = useGlobalState();
  let text: string = ""

  if (winner == 0) { text = "It's a Tie" }
  else if (winner == 1) { text = "You Lose!" }
  else if (winner == -1) { text = "You Win!" }

  return (
    <h2>{text}</h2>
  );
};

export default ShowWinner;
