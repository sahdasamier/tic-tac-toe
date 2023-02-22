import React, {useContext} from 'react'
import Xicon from '../icons/Xicon'
import {GameContext} from '../../context/GameContext'
import Oicon from '../icons/Oicon';

const Win = () => {
    const {winner, handleNextRound, handleReset} = useContext(GameContext);

    return <div className='score'> {
        winner && winner !== "no" ? (<>
            <p>You win</p>
            <h3 className={`score__tittle ${ winner ==="o" ? "text-purple " : "text-blue"}`}> {
                winner === 'x' ? <Xicon/>: <Oicon/>
            }
                take the round
            </h3>

        </>) : (<h3 className="score__tittle"> No Winner ! </h3> )
    } 
   
        <div className="score__btns">
            <button className='btn btn-sm btn-purple'
                onClick={handleReset}>quit</button>
            <button className='btn btn-sm btn-blue'
                onClick={handleNextRound}>
                Next Round</button>
        </div>
    </div>
    
}

export default Win;
