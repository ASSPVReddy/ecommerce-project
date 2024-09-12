import Image from "../../../../node_modules/next/image"
import cat1 from "../../../../public/img/cat1.jpg"

const Homecard=({
    productCount,
    imagepath,
    category
})=>{
    return (
        <div className="container text-black w-2/6 h-1/4 box-border  flex justify-center items-center  box-border">
            <div className="w-full m-4 border p-5">
            <h1 className="text-right  mr-5 text-base font-normal">{productCount} </h1>
            <div className="w-full h-full ">
                    <img src={imagepath} alt="pic" className="w-full h-full transform transition duration-500 hover:scale-110"></img>
            </div>
             <h3 className="text-left ml-5 text-lg  font-semibold">{category}</h3>
        </div>
        </div>
         )
}
export default Homecard
