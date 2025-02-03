import { useState } from 'react'


const messages : string[] = [
    "Learn React *",
    "Apply for jobs",
    "Network with people",
  ]

const Steps = () => {

    const [steps, setSteps]  = useState<number>(1)
    const [isOpen, setIsOpen] = useState<boolean>(true)
  
    function handlePrevious(){
    if(steps > 1) setSteps((cur)=> cur-1)
    }

    function handleNext(){
        if(steps < 3) setSteps((cur)=> cur+1)
    }


  return (
    <>
    <button 
      onClick={()=>setIsOpen(!isOpen)}
      className='mt-2 mx-6 flex items-center justify-center bg-black text-white rounded-2xl px-3 hover:text-orange-300' >
      {isOpen ? "close" : "open"}
    </button>
  
    {
     isOpen && (
     <div className={`  max-w-[500px]  mt-4 p-4  mx-auto bg-gray-100 shadow-2xl rounded-md`}>
        <div className='flex items-center justify-between mb-4'>
              <div className={` ${steps >=1 ? 'bg-violet-500 text-white' : ''} bg-stone-300 size-10 flex items-center justify-center rounded-[50%]`}>
                1
              </div>
              <div className={` ${steps >=2 ? 'bg-violet-500 text-white' : ''} bg-stone-300 size-10 flex items-center justify-center rounded-[50%]`}>
                2
              </div>
              <div className={` ${steps >=3 ? 'bg-violet-500 text-white' : ''} bg-stone-300 size-10 flex items-center justify-center rounded-[50%]`}>
                3
              </div>
        </div>
        <p className='text-center text-neutral-700 font-bold font-mono text-xl'>
          Step { steps} : {messages[steps -1 ]}
        </p>
        <hr />
        <div className='flex items-center justify-around mt-4'>
          <button
            onClick={handlePrevious}
            className='px-4 py-1 bg-green-300 hover:bg-green-500 rounded-lg'>Previous</button>
          <button  
            onClick={handleNext}
            className='px-4 py-1 bg-green-300 hover:bg-green-500 rounded-lg'>Next</button>
        </div>
      </div>
     )
    }
    </>
  )
}

export default Steps