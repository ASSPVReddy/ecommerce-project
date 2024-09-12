import { useState } from 'react';
import CartItems from "@/app/reusableComponents/CardComponents/CartItems";
import cartproductsData from "../../../../public/cartproducts.json";

export default function ShoppingCart() {
    const [cartProducts, setCartProducts] = useState(cartproductsData);
    const increaseQuantity = (index) => {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts[index].quantity += 1;
        updatedCartProducts[index].total = updatedCartProducts[index].price * updatedCartProducts[index].quantity;
        setCartProducts(updatedCartProducts);
    };
    const decreaseQuantity = (index) => {
        const updatedCartProducts = [...cartProducts];
        if (updatedCartProducts[index].quantity > 1) {
            updatedCartProducts[index].quantity -= 1;
            updatedCartProducts[index].total = updatedCartProducts[index].price * updatedCartProducts[index].quantity;
            setCartProducts(updatedCartProducts);
        }
    };

    return (
        <div>
            <div className="flex px-5 pt-10">
                <div className="w-9/12 px-5">
                    <table className="min-w-full bg-white border border-gray-200 text-center">
                        <thead>
                            <tr className="bg-indigo-50">
                                <th className="p-3">Products</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Total</th>
                                <th className="p-3">Remove</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-500">
                            {cartproductsData.map((product, index) => {
                                return(
                                <CartItems image={product.image} productname={product.productname} price={product.price} quantity={product.quantity} total={product.total} onIncrease={() => increaseQuantity(index)} onDecrease={() => decreaseQuantity(index)}/>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
                <div className="px-5">
                    <div className="flex mb-12">
                        <input type="text" placeholder="Coupon code" className="border border-gray-300 p-3 w-7/12 " />
                        <div>
                            <button className="bg-red-300 text-black p-3">
                                Apply Coupon
                            </button>
                        </div>
                    </div>
                    <div className="border border-gray-200 mb-5">
                        <div className="bg-indigo-50 w-full px-4 py-3">
                            <h4 className="font-bold text-2xl">Cart Summary</h4>
                        </div>
                        <div className="pt-5">
                            <div className="flex justify-between font-medium mb-4 px-5">
                                <h6>Subtotal</h6>
                                <h6>$150</h6>
                            </div>
                            <div className="flex justify-between font-medium mb-4 px-5">
                                <h6>Shipping</h6>
                                <h6>$10</h6>
                            </div>
                            <div className="border-t py-2 px-5">
                                <div className="flex justify-between font-extrabold text-xl mb-2">
                                    <h5>Total</h5>
                                    <h5>$160</h5>
                                </div>
                                <div className="flex justify-center">
                                    <button className="w-full bg-red-300 my-5 px-3 py-4 text-black">Proceed To Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}