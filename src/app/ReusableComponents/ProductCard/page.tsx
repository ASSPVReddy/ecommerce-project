const ProductCard = ({
    imagepath,
    title,
    price,
    discount,
    width
}) => {
    return (
            <div className={width}>
                <div className="w-full transform transition duration-500 hover:scale-110 border z-0">
                    <img src={imagepath} alt="pic" className="w-full"></img>
                </div>
                <div className="text-center w-full text-base font-semibold">
                    <h1>{title}</h1>
                    <h2>${price}<del>${discount}</del></h2>
                </div>
                <div className="w-full flex justify-between font-normal text-base  p-3 border-2 ">
                    <a href="#" className="hover:text-red-300"><i className="fa-solid fa-eye text-red-300"></i>View Details</a>
                    <a href="#" className="hover:text-red-300"><i className="fa-solid fa-cart-shopping text-red-300"></i>Add to Cart</a>
                </div>
            </div>
    )
}
export default ProductCard