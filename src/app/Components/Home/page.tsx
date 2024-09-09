import React from 'react';

export default function Home() {
    return (
        <header className="py-5">
            <nav className="container mx-auto flex justify-between items-center pb-5">
                <div className='z-10'>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className="hover:text-red-300">Home</a>
                        </li>
                        <li>
                            <a href="/shop" className="hover:text-red-300">Shop</a>
                        </li>
                        <li>
                            <a href="/shop_detail" className="hover:text-red-300">Shop Detail</a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-red-300">Pages<i className="fa-solid fa-caret-down pl-2"></i></a>
                            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <li>
                                    <a href="/shopping_cart" className="block px-4 py-2 hover:bg-gray-100">Shopping Cart</a>
                                </li>
                                <li>
                                    <a href="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-red-300">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/login" className="hover:text-red-300">Login</a>
                        </li>
                        <li>
                            <a href="/register" className="hover:text-red-300">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='relative'>
                <div className=" z-0 w-full">
                <img  src="../img/carousel-1.jpg" alt="Image" />
                </div>
                <div className="z-10 w-full absolute text-white text-center top-1/2">
                    <h4 className='text-2xl uppercase font-medium pb-5'>10% Off Your First Order</h4>
                    <h3 className='text-5xl font-bold pb-10'>Fashionable Dress</h3>
                    <button className="form-control border-[1px] px-4 py-2 bg-white  hover:bg-slate-100 text-black">Shop Now</button>
                </div>
            </div>
        </header>
    );
}