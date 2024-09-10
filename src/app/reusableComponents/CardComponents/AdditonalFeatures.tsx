const ServiceCard =({service,icon})=> {
    return (
        <div className="w-3/12 h-24 border flex justify-start items-center m-12 mb-20 mt-20 mr-4 ml-4 ">
           <div className="text-red-300 text-4xl p-3 ml-4">
            <i className={icon}></i>  
           </div> 
           <div>
           <h1 className=" text-xl font-semibold">{service}</h1>
           </div> 
        </div>

    )
}
export default ServiceCard