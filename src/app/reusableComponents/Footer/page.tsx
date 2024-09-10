export default function Footer(){
    return(
        <footer className="bg-indigo-50">
            <div className="container-fluid bg-indigo-50 w-full mx-auto px-10 px-0">
                <div className="flex pt-20">
                    <div className="w-5/12">
                        <h2 className="mb-6 text-4xl font-bold"><span className="text-red-300 font-bold border border-white border-grey-300 px-4 py-2">E</span> Shopper</h2>
                        <p className="mb-3">Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                        <p className="mb-3">
                            <i className="fa fa-map-marker-alt text-primary mr-3 text-red-300"></i>
                            123 Street, New York, USA
                        </p>
                        <p className="mb-3">
                            <i className="fa fa-envelope text-primary mr-3 text-red-300"></i>
                            info@example.com
                        </p>
                        <p className="mb-3">
                            <i className="fa fa-phone text-primary mr-3 text-red-300"></i>
                            +012 345 67890
                        </p>
                    </div>
                    <div className="w-1/5">
                        <h1 className="mb-6 text-lg font-semibold text-gray-900 "><strong>Quick Links</strong></h1>
                        <ul className="font-small space-y-2">
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Our Shop</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Shop Detail</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Shopping Cart</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Checkout</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <h1 className="mb-6 text-lg font-semibold text-gray-900 "><strong>Quick Links</strong></h1>
                        <ul className="font-small space-y-2">
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline ">Home</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Our Shop</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Shop Detail</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Shopping Cart</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Checkout</a>
                            </li>
                            <li>
                                <i className="fa fa-angle-right mr-1"></i><a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/5">
                        <h1 className="mb-6 text-lg font-semibold text-gray-900 "><strong>Newsletter</strong></h1>
                        <input type="text" className="form-control border border-grey border-[1px] pl-1 pr-4 py-3 mb-3 w-9/12" placeholder="Your Name" />
                        <input type="text" className="form-control border border-grey border-[1px] pl-1 pr-4 py-3 mb-3 w-9/12" placeholder="Your Email" />
                        <button className="form-control border-[1px] pr-4 py-3 bg-red-200 w-9/12 hover:text-white">Subscribe Now</button>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto border-white lg:my-8" />
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm sm:text-center dark:text-gray-400 mb-5">© <a href="#" className="hover:underline"><b>Your Site Name</b></a>. All Rights Reserved. Designed by <a href="#" className="hover:underline"><b>HTML Codex </b></a>Distributed By <a href="#" className="hover:underline text-red-300">ThemeWagon</a></p>
                    </div>
                    <div>
                        <img src="../img/payments.png" alt="Payment Methods" className="ml-auto mb-5"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}