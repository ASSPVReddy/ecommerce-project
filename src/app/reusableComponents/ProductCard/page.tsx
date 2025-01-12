const ProductCard = ({
    imagepath,
    title,
    price,
    discount,
    description,
    width
}) => {
    return (
        <div className={`${width} pt-6 z-10 `} >
            <div className="p-6 border ">
                <div className="z-100 p-2 m-6">
                    <div className="">
                        <img src={imagepath} alt="pic" className="w-full z-0 duration-300 hover:scale-125  "></img>
                    </div>
                </div>
                <div className="text-center w-full text-base font-semibold z-10 border-t">
                    <h1 className="p-3">{title}</h1>
                    <h2 className="p-3">${price}<del className="pl-2">${discount}</del></h2>
                </div>
                <div>
                    <p className="">{description}</p>
                </div>
                <div className="w-full flex justify-between font-normal text-base  p-3 border">
                    <a href="#" className="hover:text-red-300 pl-2"><i className="fa-solid fa-eye text-red-300"></i>View Details</a>
                    <a href="#" className="hover:text-red-300 pr-2"><i className="fa-solid fa-cart-shopping text-red-300"></i>Add to Cart</a>
                </div>
            </div>
        </div>
    )
}
export default ProductCard