import {createContext, useContext, useState} from "react";
import {calcWinner} from "../helpers/calcSquares";
import {ModalContext} from "../context/ModalContext"

const GameContext = createContext();

const GameState = (props) => {
    const {showModal, hideModal, setModalMode} = useContext(ModalContext);
    const [screen, setScreen] = useState("start"); // start || game
    const [playMode, setPlayMode] = useState("user"); // user || cpu
    const [activeUser, setActiveUser] = useState("x"); // x || o
    const [squares, setSquares] = useState(new Array(9).fill(""));
    const [xnext, setXnext] = useState(false);
    const [winner, setWinner] = useState(null);
    const [winnerLine, setWinnerLine] = useState(null);
    const [ties, setTies] = useState({x: 0, o: 0});

   


    const changePlayMode = mode => {
        setPlayMode(mode);
        setScreen("game");
    }
    const handleSquareClick = (ix) => {
        let currentUser = xnext ? "o" : "x";
        if (playMode === "cpu" && currentUser !== activeUser) {
            return;
        }
        let ns = [...squares];
        ns[ix] = !xnext ? "x" : "o"; // that mean i send (xi) as the value of click so i said here if the xplayer play now fill with X (notnext"xnext)if not fill wuth o
        setSquares(ns); // fill the suare with anew value
        setXnext(!xnext);
        // check winner
        checkWinner(ns) // I take this ns after modifiction to take tne modern copy not old one so i made a copy from array tbe best without errors
    }
    const handleReset =()=>{
       setSquares(new Array(9).fill('')) //that mean i empty the squares
       setXnext(false)
       setWinner(null)
    setWinnerLine(null)
    setActiveUser('x')
    setTies({x:0 , o:0})
    hideModal()
    setScreen("start")
    }

    const handleNextRound =()=>{
        setSquares(new Array(9).fill(''))
        setXnext(winner=== 'o') //the winner will start , if winner=o that mean xnext was true
        setWinner(null)
    setWinnerLine(null)
    hideModal()
    
    }
   

    
    const checkWinner = (ns) => {
        const isWinner = calcWinner(ns); // ns:squares
        if (isWinner) {
            setWinner(isWinner.winner);
            setWinnerLine(isWinner.line);
            // set tries
            const ti = {
                ...ties
            };
            ti[isWinner.winner] += 1;
            setTies(ti);
            showModal();
            setModalMode("winner");
        }
    }

    return (
        <GameContext.Provider value={
            {
                screen,
                activeUser,
                playMode,
                squares,
                winner,
                winnerLine,
                xnext,
                ties,
                handleSquareClick,
                setSquares,
                setScreen,
                changePlayMode,
                setActiveUser,
                setPlayMode,
                setTies,
                handleNextRound,
                handleReset

            }
        }>
            {
            props.children
        } </GameContext.Provider>
    );
};
export {
    GameContext,
    GameState
};
