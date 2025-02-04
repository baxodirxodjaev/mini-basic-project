
interface StatusProp{
    completionPercentage : number;
    packedCount : number;
    totalPacks : number;
    hancdleClearAll : ()=> void;
    sortBy : string;
    sortPacks : (sort: string)=> void;
}


const Stats = ({completionPercentage, packedCount, totalPacks, hancdleClearAll, sortBy, sortPacks} :StatusProp ) => {

  if(totalPacks <= 0)
    return (
    <p className="text-lg text-orange-600 font-mono text-center"> Start adding packs to see your progress :)</p>
  )

  return (
    <div>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <select value={sortBy} onChange={(e)=>sortPacks(e.target.value)} className="border-b">
          <option value="input">Sort by input order</option>
          <option value="name">Sort by name</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button 
          onClick={hancdleClearAll}
          className="bg-rose-400 hover:bg-rose-600 px-4 py-1 rounded-md text-white font-mono" >
            Clear All
        </button>
      </div>
        <h3 className="text-center text-xl font-medium ">
            You have <span className="text-lime-600 font-bold"> 
                {totalPacks}
            </span>  packs on your list, and you have already completed <span className="text-blue-500 font-bold">
              <span className="text-orange-800">{packedCount}</span>  ({completionPercentage}%)  
            </span> of the packs.
        </h3>
    </div>
  )
}

export default Stats