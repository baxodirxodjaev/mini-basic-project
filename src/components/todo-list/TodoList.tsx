import { useState } from "react"
import Form from "./Form"
import Logo from "./Logo"
import PackList from "./PackList"
import Stats from "./Stats"


export interface TravelPaks {
  id: number
  name: string
  amount: number
  packed : boolean
}

const TodoList = () => {

  const [packs, setPacks] = useState<TravelPaks[]>([
    {id: 1, name: "Hat", amount: 10, packed: false},
    {id: 2, name: "Sunglasses", amount: 20, packed: false},
    {id: 3, name: "Beer", amount: 15, packed: false},
  ])

  const [sortBy, setSortBy] = useState<string>('input')

// sort packs by input, name, or packed
  const sortPacks=(sort: string)=>{
    setSortBy(sort)
  }

  // get quantity of packs and its packed percantage%
  const totalPacks = packs?.length;
  const packedCount = packs.filter((pack) => pack.packed).length;
  const completionPercentage = totalPacks > 0 ? Math.round((packedCount / totalPacks) * 100) : 0;
  
  // add new pack functuin by checking also if the pack is already in the list
  const addPack =(newPack: TravelPaks) => {
    const alertText = document.getElementById('alert') as HTMLParagraphElement | null
    
      const isExisting = packs.some((item)=> item.name.toLocaleLowerCase() === newPack.name.toLocaleLowerCase() );
      if(isExisting) {
        if(alertText){
          alertText.innerText = `Pak with name "${newPack.name}" already exists`
        }
        return ;
      }
      if (alertText) {
        alertText.innerHTML = "";
      }
      setPacks((packs)=> [...packs, newPack])
  }

// change pack status to completed or not
  const checkPack = (id: number) => {
     setPacks((packs) => packs.map((pack) =>  
      pack.id === id ? { ...pack, packed: !pack.packed } : pack
    ))
  }

  // delete one pack from list
  const deletePack = (id: number) => {
    setPacks((packs) => packs.filter((pack) => pack.id !== id))
  }

  // delete all packs from list
  const hancdleClearAll=()=>{
    const confirmed = window.confirm("Are you sure to delete all items?");
    if (confirmed) {
      setPacks([])
    }
  }

  return (
    <div className=" mx-auto container p-4  mt-[90px] bg-neutral-100">
      <Logo/>
      <Form 
        onAddPack={addPack} />

      <PackList 
        packs={packs} 
        checkPack ={checkPack} 
        deletePack={deletePack} 
        sortBy={sortBy}/>

      <Stats 
        completionPercentage={completionPercentage}
        packedCount={packedCount}
        totalPacks={totalPacks}
        hancdleClearAll={hancdleClearAll}
        sortBy={sortBy}
        sortPacks={sortPacks} />

    </div>
  )
}

export default TodoList