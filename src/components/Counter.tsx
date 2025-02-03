import { useState } from "react"



const Counter = () => {
    const [count , setCounter] = useState<number>(0)
    const [doubleCount, setDoubleCount] = useState<number>(0)

    const currentDate = ()=>{
        const year = new Date().getFullYear()
        const day = new Date().getDate().toString().padStart(2, '0')
        const month = new Date().getMonth() +1 
        return `${day}-${month.toString().padStart(2, '0')}-${year}`
    }

    function handleCount(){
        setCounter((prev)=> prev +1)
    }

    function handleCountMinus(){
       if(count >= 1) setCounter((prev) => prev - 1)
    }

    function handleDoubleCount(){
        setDoubleCount((prev) => prev + count)
    }

    function handleDoubleCountMinus(){
        if(doubleCount >= count) setDoubleCount((prev) => prev - count)
    }


  return (
    <div className="max-w-[500px] mx-auto  mt-[90px] bg-stone-100 shadow-2xl p-4">
        <div>
            <h1 className="text-3xl font-bold text-center">Counter App</h1>
            <div className="flex items-center justify-center gap-4">
                <button 
                onClick={handleCountMinus}
                className=" cursor-pointer pb-2 text-4xl font-extrabold text-yellow-700">-</button>
                <p className="text-xl font-bold text-center">Count: {count}</p>
                <button
                 onClick={handleCount}
                 className="cursor-pointer pb-2 text-4xl font-extrabold text-yellow-700">+</button>
            </div>
            <div className="flex items-center justify-center gap-4">
            <button
                 onClick={handleDoubleCountMinus}
                 className="cursor-pointer pb-2 text-4xl font-extrabold text-yellow-700">-</button>
                <p className="text-xl font-bold text-center">Double count: {doubleCount}</p>
                <button
                    onClick={handleDoubleCount}
                    className="cursor-pointer pb-2 text-4xl font-extrabold text-yellow-700">+</button>
            </div>
        </div>
        <p className="font-light text-end mt-3">{currentDate()}</p>
    </div>
  )
}

export default Counter