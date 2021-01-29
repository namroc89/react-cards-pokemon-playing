import React, { useState } from "react";

const useFlip = () => {
  const [state, setState] = useState(true);
  const flipCard = () => {
    setState((state) => !state);
  };
  return [state, flipCard];
};

export default useFlip;
// const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
