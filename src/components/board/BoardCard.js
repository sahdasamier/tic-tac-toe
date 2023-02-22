import React, { useContext } from 'react'
import Xicon from '../icons/Xicon'
import Oicon from '../icons/Oicon'
import { GameContext } from '../../context/GameContext'
/* active to show who is play and active , index to show you how man cards contin X, O*/

const BoardCard = ({ active, user = "nouser", index }) => {
  const { handleSquareClick } = useContext(GameContext);
  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-purple"
      } ${active ? "active" : "shadow-gray"}`}
      onClick={() => handleSquareClick(index)}
    >
      {user === "x" && <Xicon color={active && "dark"} size="lg" />}
      {user === "o" && <Oicon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default BoardCard;