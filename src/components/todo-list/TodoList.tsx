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
    {id: 1, name: "Pak-1", amount: 10, packed: false},
    {id: 2, name: "Pak-2", amount: 20, packed: false},
    {id: 3, name: "Pak-3", amount: 15, packed: false},
  ])

  const totalPacks = packs?.length;
  const packedCount = packs.filter((pack) => pack.packed).length;
  const completionPercentage = totalPacks > 0 ? Math.round((packedCount / totalPacks) * 100) : 0;
  
  const addPack =(newPack: TravelPaks) => {
    const alertText = document.getElementById('alert') as HTMLParagraphElement | null
    
      const isExisting = packs.some((item)=> item.name.toLocaleLowerCase() === newPack.name.toLocaleLowerCase() );
      if(isExisting) {
        if(alertText){
          alertText.innerText = `Pak with name ${newPack.name} already exists`

          // setTimeout(() => {
          //   alertText.innerHTML = "";
          // }, 3000)
        }
        return ;
      }
      if (alertText) {
        alertText.innerHTML = "";
      }
      setPacks((packs)=> [...packs, newPack])
    
  }


  const checkPack = (id: number) => {
     setPacks((packs) => packs.map((pack) =>  
      pack.id === id ? { ...pack, packed: !pack.packed } : pack
    ))
  }

  const deletePack = (id: number) => {
    setPacks((packs) => packs.filter((pack) => pack.id !== id))
  }


  return (
    <div className=" mx-auto container p-4  mt-[90px] bg-neutral-100">
      <Logo/>
      <Form onAddPack={addPack} />
      <PackList packs={packs} checkPack ={checkPack} deletePack={deletePack} />
      <Stats completionPercentage={completionPercentage} totalPacks={totalPacks}  />
    </div>
  )
}

export default TodoList