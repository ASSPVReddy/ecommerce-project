import Image from "../../../../node_modules/next/image"
const VendorCard=({imagepath})=>{
    return(
        <div className="w-1/6 p-10 ">
            <Image src={imagepath} alt="pic" className="w-full h-full border border-stone-200"/>
        </div>
    )
}
export default VendorCard