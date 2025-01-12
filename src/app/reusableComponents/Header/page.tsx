export default function Header(){
    return(
        <div className="container bg-white ">
                <div className="flex  justify-between px-16  py-2.5 bg-indigo-50  w-full ">
                    <div className="lg:order-2 ">
                        <a href="#" className="hover:underline">FAQs</a><span className="px-2">|</span>
                        <a href="#" className="hover:underline">Help</a><span className="px-2">|</span>  
                        <a href="#" className="hover:underline">Support</a>
                    </div>
                    <div className="flex items-center lg:order-2 ">
                        <a href="#"><i className="fa-brands fa-facebook-f px-2"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter px-2"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in px-2"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram px-2"></i></a>
                        <a href="#"><i className="fa-brands fa-youtube px-2"></i></a>
                    </div>
                </div>
            <div className=" py-2.5 bg-white px-16 ">
                <div className="flex flex-wrap justify-between items-center ">
                <div className="flex items-center lg:order-2  pt-2">
                        <a href="#"><h1 className="text-4xl font-semibold"><span className="text-red-300 font-bold border border-grey-300 px-4 py-2">E</span> Shopper</h1></a>
                    </div>
                    <div className="flex items-center lg:order-2 w-5/12">
                        <div className="w-full">
                            <input type="text" className="form-control border border-grey border-[1px] pl-1 pr-4 py-2 w-full" placeholder="Search for products" />
                        </div>
                        <div>
                            <i className="fa-solid fa-magnifying-glass border border-grey-300 py-3 px-3 text-red-300"></i>
                        </div>
                    </div>
                    <div className="flex items-center lg:order-2 ">
                        <div className="border border-grey-300 m-2">
                            <a href="#"><i className="fa-solid fa-heart text-red-300  p-3"></i><span className="pr-2">0</span></a>
                        </div>
                        <div className="border border-grey-300">
                            <a href="#"><i className="fa-solid fa-cart-shopping text-red-300 p-3"></i><span className="pr-2">0</span></a>
                        </div>
                        </div>
                        </div>
            </div>
	</div>
    )
}