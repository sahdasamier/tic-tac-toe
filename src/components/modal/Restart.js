import React from 'react'

const Restart = () => {
  return (
    <div className='restart'>
      <h3 className="restart__title">
        Restart Game?
      </h3>
      <div className="restart__btns">
        <button className='btn btn-sm'> No,cancal</button>
        <button className='btn btn-sm btn-purple'> Yes,restart</button>
      </div>
    </div>
  )
}

export default Restart