import React from 'react'

const Card = ({name,color,img,click}) => {
  return (
    <div onClick={()=>click(name)} data-name={name} className='aspect-[69/85] w-[250px] bg-card rounded-lg flex flex-col p-3 cursor-pointer hover:scale-105 transition-[scale_100ms]'>
        <div className={`${color} flex-[80%] rounded-lg flex justify-center items-center pointer-events-none`}>
            <img src={img} className=' w-32' alt="" />
        </div>
        <div className='flex justify-center items-center flex-[20%] text-white text-lg font-medium'>
            {name}
        </div>
    </div>
  )
}

export default Card