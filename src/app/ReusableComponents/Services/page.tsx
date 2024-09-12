// @ts-ignore
const ServiceCard =({service,icon})=> {
    return (
        <div className="w-3/12 h-24 border flex justify-center items-center m-4">
           <div className="text-red-300 text-4xl p-3">
            <i className={icon}></i>  
           </div> 
           <div>
           <h1 className="text-center text-xl font-semibold">{service}</h1>
           </div> 
        </div>
        
    )
}
export default ServiceCard