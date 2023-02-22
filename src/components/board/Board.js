import React, {useContext} from 'react';
import Xicon from '../icons/Xicon';
import Oicon from '../icons/Oicon';
import BoardCard from './BoardCard';
import {GameContext} from '../../context/GameContext';
const Board = () => { /*that's num of squares*/
    const {squares, xnext ,ties , winner , winnerLine} = useContext(GameContext);
    return (
        <div className='board'>
            <div className="board__header">
                <div>
                    <Xicon size="lg"/>
                    <Oicon size="lg"/>
                </div>
                <div className='board__turn'>
                    {
                    !xnext ? (
                        <Xicon color="light" size="sm"/>
                    ) : (
                        <Oicon color="light" size="sm"/>
                    )
                }

                    turn
                </div>
                <div>
                    <button className='btn btn-sm board__restart'>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="redo" role="img" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="board__body">
                {/*sq/squares ,ix/index ,key/to backend can follow that, user/we can put sq or be empty */}
                {
                squares.map((sq, ix) => (
                    <BoardCard 
                        key={ix}
                        index={ix}
                        user={sq}
                        active={
                            winner && winnerLine && winnerLine.includes(ix)
                        }/>
                ))
            } </div>
            <div className="board__footer">
                <div className="card bg-blue">
                    <p className='text-align'>X (you)</p>
                    <strong className='text-2xl'>{ties.x}</strong>
                </div>
                <div className="card bg-light">
                    <p className='text-align'>ties</p>
                    <strong className='text-2xl'>{ties.x + ties.o} </strong>
                </div>
                <div className="card bg-purple">
                    <p className='text-align'>O (cpu)</p>
                    <strong className='text-2xl'>{ties.o}</strong>
                </div>
            </div>

        </div>
    )
}

export default Board
