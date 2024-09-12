export default function CheckOut() {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold">Billing Address</h1>
                <form>
                    <div className="flex pt-6">
                        <div className="w-1/3">
                            <div className="pb-2">
                                <label>First Name</label>
                                <div>
                                    <input type="text" placeholder="name" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>E-mail</label>
                                <div>
                                    <input type="text" placeholder="example@email.com" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>Address Line 1</label>
                                <div>
                                    <input type="text" placeholder="123 Street" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>Country</label>
                                <div>
                                    <select className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10">
                                        <option>United States</option>
                                        <option >Afghanistan</option>
                                        <option>Albania</option>
                                        <option>Algeria</option>
                                    </select>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>State</label>
                                <div>
                                    <input type="text" placeholder="name" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                        </div>
                        <div className="ml-8 w-1/3">
                            <div className="pb-2">
                                <label>Last Name</label>
                                <div>
                                    <input type="text" placeholder="last name" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>Mobile No</label>
                                <div>
                                    <input type="text" placeholder="+123 345 6789" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>Address Line 2</label>
                                <div>
                                    <input type="text" placeholder="123 Street" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                            <div className="pb-2">
                                <label>City</label>
                                <div>
                                    <input type="text" placeholder=" " className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>

                                </div>
                            </div>
                            <div className="pb-2">
                                <label>ZIP Code</label>
                                <div>
                                    <input type="text" placeholder="123" className="border-violet-100 border-2 mb-4 focus:outline-transparent w-full h-10"></input>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-200 mb-5 ml-8 w-1/4 h-96">
                            <div className="bg-indigo-50 w-full px-4 py-3">
                                <h4 className="font-bold text-2xl">Order Total</h4>
                            </div>
                            <div className="pt-2">
                                <h1 className="mb-3 ml-6 text-2xl font-semibold">Products</h1>

                                <div className="flex justify-between font-medium mb-3 px-5">
                                    <h6>Colorful Stylish Shirt 1</h6>
                                    <h6>$150</h6>
                                </div>
                                <div className="flex justify-between font-medium mb-3 px-5">
                                    <h6>Colorful Stylish Shirt 2</h6>
                                    <h6>$150</h6>
                                </div>
                                <div className="flex justify-between font-medium mb-3 px-5">
                                    <h6>Colorful Stylish Shirt 3</h6>
                                    <h6>$150</h6>
                                </div>
                                <div className="border-t py-2 px-5 mr-2">
                                    <div className="flex justify-between font-medium mb-3 px-5">
                                        <h6>Subtotal</h6>
                                        <h6>$150</h6>
                                    </div>
                                    <div className="flex justify-between font-medium mb-3 px-5">
                                        <h6>Shipping</h6>
                                        <h6>$10</h6>
                                    </div>
                                    <div className="border-t py-2 px-5">
                                        <div className="flex justify-between font-extrabold text-xl mb-3">
                                            <h5>Total</h5>
                                            <h5>$160</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
                <div className="border border-gray-200 mb-3 float-right w-1/4 mr-12">
                    <div className="bg-indigo-50 w-full px-4 py-3">
                        <h4 className="font-bold text-2xl">Payment</h4>
                    </div>
                    <div className="ml-4">
                        <div className="pt-4">
                            <input type="radio" placeholder=" "></input>
                            <label className="ml-2">Paypal</label>
                        </div>
                        <div className="pt-2"> 
                            <input type="radio" placeholder=" "></input>
                            <label className="ml-2">Direct Check</label>
                        </div>
                        <div className="pt-2">
                            <input type="radio" placeholder=" "></input>
                            <label className="ml-2">Bank Transfer</label>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="w-3/4 bg-red-300 my-5 px-3 py-4 text-black hover:text-white">Place Order</button>
                    </div>


                </div>
                <div>
                    <input type="checkbox" placeholder=""></input>
                    <label className="ml-2">Create an account</label>
                </div>
                <div className="pt-4">
                    <input type="checkbox" placeholder=""></input>
                    <label className="ml-2">Ship to different address</label>
                </div>
            </div >
        </div>
    )
}