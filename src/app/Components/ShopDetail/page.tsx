import Image from "../../../../node_modules/next/image";
import offer1 from "../../../../public/img/offer1.png"

export default function ShopDetails() {
    return (
        <div>
            <div className=" bg-indigo-50 border-2ws text-center w-full h-72  pt-24">
                <h1 className="text-4xl font-semibold">SHOP DETAIL</h1>
                <p className="pt-6"><span className="text-red-300">Home</span> - Shop Detail</p>
            </div>
            <div className="flex-justify-center">
                <div className="w-1/2"></div>
                <div className="w-1/2 float-right pt-8 mr-14">
                    <div>
                        <h1 className="text-3xl font-bold">Colorful Stylish Shirt</h1>
                        <div>
                            <div className="flex pt-4">
                                <p className="fas fa-star text-red-300"></p>
                                <p className="fas fa-star text-red-300"></p>
                                <p className="fas fa-star text-red-300"></p>
                                <p className="fas fa-star-half-alt  text-red-300"></p>
                                <p className="far fa-star text-red-300"></p>
                                <p className="pt-0 ml-2">(50 Reviews)</p>
                            </div>
                            <h1 className="text-2xl font-bold pt-4">$150.00</h1>
                            <p className="pt-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                            <div className="flex pt-4">
                                <p className="text-lg  font-bold">Sizes:</p>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-1" name="size"></input>
                                    <label className="ml-2">XS</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-2" name="size"></input>
                                    <label className="ml-2">S</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-3" name="size"></input>
                                    <label className="ml-2">M</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-4" name="size"></input>
                                    <label className="ml-2">L</label>
                                </div>
                                <div className="ml-4 pt-1">
                                    <input type="radio" id="size-5" name="size"></input>
                                    <label className="ml-2">XL</label>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-4">
                            <p className="text-lg font-bold">Colors:</p>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-1" name="size"></input>
                                <label className="ml-2">Black</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-2" name="size"></input>
                                <label className="ml-2">White</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-3" name="size"></input>
                                <label className="ml-2">Red</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-4" name="size"></input>
                                <label className="ml-2">Blue</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-5" name="size"></input>
                                <label className="ml-2">Green</label>
                            </div>
                        </div>
                        <div>
                            <div className="pt-8 flex">
                                <button className="bg-red-300 border2ws w-1/12 h-9">
                                    <i className="fa fa-minus hover:text-white"></i>
                                </button>
                                <input type="text" placeholder="1" className=" bg-indigo-50 border2ws text-center w-1/12 h-9 focus:outline-transparent"></input>
                                <button className="bg-red-300 border2ws w-1/12 h-9">
                                    <i className="fa fa-plus hover:text-white"></i>
                                </button>
                                <button className="bg-red-300 border2ws w-1/5 h-9 hover:text-white ml-4">
                                    <i className="fa fa-shopping-cart mr-1"></i>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                        <div className="flex pt-6">
                            <h1 className="lg font-semibold">Share on:</h1>
                            <div>
                                <a href=""><i className="fab fa-facebook-f ml-4"></i></a>
                                <a href=""><i className="fab fa-twitter ml-4"></i></a>
                                <a href=""><i className="fab fa-linkedin-in ml-4"></i></a>
                                <a href=""><i className="fab fa-pinterest ml-4"></i></a>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div >
                    <Image src={offer1} alt="image"className="pt-8 ml-14"></Image>
                </div>
                 <div className="w-full flex justify-center space-x-20 pt-8">
                        <h1 className=" hover:border border-b-0">Description</h1>
                        <h1 className="ml-8 text-red-300 border">Information</h1>
                        <h1 className="ml-8 text-red-300 border">Reviews(0)</h1>
                    </div>
                <div className="ml-14 mr-14 p-6 border">
                    <h1 className="text-2xl font-semibold "> Product Description </h1>
                    <p className="pt-4">Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                    <p className="pt-4">Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                </div>
        </div>
    )
}