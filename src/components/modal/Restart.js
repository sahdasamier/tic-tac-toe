import React from 'react'
import { ModalContext } from '../../context/ModalContext';
import { GameContext } from '../../context/GameContext';
import {useContext} from "react";

const Restart = () =>{
 
    const {handleReset}= useContext(GameContext);
    const {hideModal}= useContext(ModalContext) 
    
  return (
    <div className='restart'>
      <h3 className="restart__title">
        Restart Game?
      </h3>
      <div className="restart__btns">
        <button className='btn btn-sm'onClick={hideModal}> No,cancal</button>
        <button className='btn btn-sm btn-purple'onClick={handleReset}> Yes,restart</button>
      </div>
    </div>
  )
}

export default Restart