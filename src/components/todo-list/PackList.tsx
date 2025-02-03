import { TravelPaks } from "./TodoList";
import DeleteIcon from './../../assets/x-circle.svg'


interface PackListProps { 
    packs: TravelPaks[];
    checkPack : (id : number) => void;
    deletePack : (id: number) => void;
}


const PackList = ({packs ,checkPack, deletePack } : PackListProps) => {

   

  return (
    <ul className="flex flex-wrap items-center justify-start  mt-5 my-5 bg-amber-50 shadow-xl rounded-md">
        {
            packs && packs.map((pack) => <li key={pack.id}
                 className={`${pack.packed && 'line-through'} flex items-center justify-center gap-2 my-2 mx-7`}>
                <span className="flex items-center justify-center"><input
                    onChange={() => checkPack(pack.id)}
                    type="checkbox"
                    checked={pack.packed} /> 
                </span>
                <span className="italic text-lg font-mono">  {pack?.name }  ({ pack?.amount})</span>
                <span></span>
                <span className="flex items-center justify-center">
                    <button 
                        onClick={()=>deletePack(pack.id)}
                        className="cursor-pointer hover:scale-110 transition-all duration-300">
                        <img src={DeleteIcon} alt="DeleteIcon" />
                    </button>
                </span>
                </li> )
        }
    </ul>
  )
}

export default PackList