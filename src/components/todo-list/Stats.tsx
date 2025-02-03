
interface StatusProp{
    completionPercentage : number
    totalPacks : number
}


const Stats = ({completionPercentage , totalPacks} :StatusProp ) => {
  return (
    <div>
        <h3 className="text-center text-xl font-medium ">
            You have <span className="text-lime-600 font-bold"> 
                {totalPacks}
            </span>  packs on your list, and you have already completed <span className="text-blue-500 font-bold">
             {completionPercentage}%  
            </span> of the packs.
        </h3>
    </div>
  )
}

export default Stats