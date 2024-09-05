export default function Header(){
    return(
        <div className="container">
            <div className="px-4 lg:px-6 py-2.5 dark:bg-gray-800 bg-indigo-50">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-2 pl-10">
                        <a>FAQs</a><span className="px-2">|</span>
                        <a>Help</a><span className="px-2">|</span>  
                        <a>Support</a>
                    </div>
                    <div className="flex items-center lg:order-2 pr-10">
                        <i className="fa-brands fa-facebook-f px-2"></i>
                        <i className="fa-brands fa-twitter px-2"></i>
                        <i className="fa-brands fa-linkedin-in px-2"></i>
                        <i className="fa-brands fa-instagram px-2"></i>
                        <i className="fa-brands fa-youtube px-2"></i>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-2 pl-10">
                        <h1 className="font-weight-semi-bold"><span className="text-red-300 font-bold border border-grey-300 p-4">E</span> Shopper</h1>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <input type="text" className="form-control border border-grey border-[1px] pl-10 pr-4 py-2" placeholder="Search for products" />
                        <i className="fa-solid fa-magnifying-glass border border-grey-300 py-3 px-5 text-red-300"></i>
                    </div>
                    <div className="flex items-center lg:order-2 pr-20">
                        <i className="fa-solid fa-heart px-5 text-red-300 border border-grey-300 py-3"></i>
                        <i className="fa-solid fa-cart-shopping px-5 text-red-300 border border-grey-300 py-3"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}