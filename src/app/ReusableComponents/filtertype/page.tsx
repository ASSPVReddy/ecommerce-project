export default function FilterType({
    labeltype,
    numberofitems
}){
    return(
            <div className="w-full flex justify-between p-2">
                <div className="pl-12">
                 <input type={"checkbox"} ></input><label className="pl-2">{labeltype}</label>
                 </div>
                <div className="border mr-6 text-xs p-1">
                    <h2 className="">{numberofitems}</h2>
                </div>
        </div>
    )
}