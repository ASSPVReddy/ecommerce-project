const CartItems=({
    productname,
    price,
    quantity,
    total,
    image,
    onIncrease,
    onDecrease
})=>{
    return(
        <tr>
            <td className="p-3 border align-middle flex"><img className="w-12" src={image} alt="" /><p className="pt-4">{productname}</p></td>
            <td className="p-3 border">${price}</td>
            <td className="p-3 border text-black">
                <div className="flex flex-wrap justify-center">
                    <button className="bg-red-300 border2ws px-2 py-1" onClick={onDecrease}>
                        <i className="fa-solid fa-minus hover:text-white"></i>
                    </button>
                    <input type="text" placeholder={quantity} className=" bg-indigo-50 border2ws text-center w-2/12 h-8" ></input>
                    <button className="bg-red-300 border2ws px-2 py-1" onClick={onIncrease}>
                        <i className="fa fa-plus hover:text-white"></i>
                    </button>
                </div>
            </td>
            <td className="p-3 border">${total}</td>
            <td className="p-3 border">
                <button className="bg-red-300 border2ws px-2 py-1 text-black">
                    <i className="fa-solid fa-xmark hover:text-white"></i>
                </button>
            </td>
        </tr>
    )
}
export default CartItems