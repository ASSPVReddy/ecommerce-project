import Link from "../../../../node_modules/next/link"

const Homecard = ({
    imagepath,
    category
}) => {
    return (
        <Link href="/Products">
        <div className=" text-black w-full h-[320px] box-border z-0 p-4 flex justify-center items-center  box-border ">
            <div className="w-full p-3 h-full  border z-0">
                <div className="w-full h-3/4 z-0   flex justify-center items-center">
                    <img src={imagepath} alt="pic" className="w-full h-full transform transition duration-500 hover:scale-110 z-0 object-fit"></img>
                </div>
                <h3 className="text-left text-lg  font-semibold z-100 ">{category}</h3>
            </div>
        </div>
        </Link>
    )
}
export default Homecard
