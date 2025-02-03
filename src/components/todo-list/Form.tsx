import { useState } from "react";
import { TravelPaks } from "./TodoList";

interface FormProps{
    onAddPack : (packs :TravelPaks )=> void;
}


const Form = ({onAddPack} : FormProps ) => {

    const [inpName, setInpName] = useState<string> ('');
    const [inpQuantity, setInpQuantity] = useState<number>(1)

    

    const handleAddPack =(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newPack : TravelPaks ={
                id: Date.now(),
                name : inpName,
                amount: inpQuantity,
                packed : false
            }
        if(newPack.name){
            onAddPack(newPack)
            setInpName('')
            setInpQuantity(1)
        }
    }

  return (
    <form 
        className=" mx-auto  flex flex-wrap items-center justify-center gap-[25px] mt-5" 
        onSubmit={(e)=>handleAddPack(e)}>
        <label className="text-xl font-light font">What do you need for your trip?</label>
        <select 
            className="outline outline-cyan-800 rounded-sm px-2"
            value={inpQuantity}
            onChange={(e)=>setInpQuantity(Number(e.target.value))}>
            {
                Array.from({length: 20}, (_, i) => i+1).map((i) =>  (
                    <option value={i} key={i}>{i}</option>
                ))
            }
        </select>
        <input
          required
          value={inpName}        
          onChange={(e)=>setInpName(e.target.value)}
          type="text"
          placeholder="Item..."
          className="outline outline-emerald-800 rounded-sm px-2"
           />
        <button className="px-4 py-1 bg-green-600 font-medium rounded-md text-slate-800 hover:text-white hover:bg-green-700">Add</button>
        <p className="text-red-400 font-normal text-sm" id="alert"></p>
    </form>
  )
}

export default Form