import Image from "../../../../node_modules/next/image"
import cat1 from "../../../../public/img/cat1.jpg"

const Homecard=({
    productCount,
    imagepath,
    category
})=>{
    return (
        <div className="bg-white border border-stone-100 text-black w-64 h-64 flex justify-center items-center m-3">
            <div>
            <h1 className="text-right  mr-5 text-base font-normal">{productCount}</h1>
            <div className=" ">
                    <Image src={imagepath} alt="pic" width={220} height={220}></Image>
            </div>
            <h3 className="text-left ml-5 text-lg  font-semibold">{category}</h3>
        </div>
        </div>
         )
}
export default Homecard
