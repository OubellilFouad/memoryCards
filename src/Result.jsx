import React from 'react'

const Result = ({hidden,score,message,reset,setReset,setHidden}) => {
  const HandleReset = () => {
    setReset(!reset);
    setHidden(true);
  }
  return (
    <div className={`${hidden && 'hidden'} w-screen h-screen absolute flex flex-col justify-center items-center bg-transparent gap-10 z-10`}>
        <p className=' text-5xl text-white'>{message}</p>
        <span className='text-white'>Your score is {score}</span>
        <button onClick={HandleReset} className=' px-12 py-3 bg-main text-white rounded-lg'>
            Play again
        </button>
    </div>
  )
}

export default Result