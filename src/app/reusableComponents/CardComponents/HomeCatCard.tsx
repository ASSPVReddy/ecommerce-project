import Image from "../../../node_modules/next/image"
const Homecard=({
    count,
    imagepath,
    category
})=>{
    return (
        <div>
            <h1>{count}hello</h1>
            <Image src={imagepath} alt="pic" ></Image>
            <h3>{category}cat</h3>
        </div>
         )
}
export default Homecard
