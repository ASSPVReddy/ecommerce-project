export default function ShopDetails() {
    return (
        <div>
            <div className=" bg-indigo-50 border-2ws text-center w-full h-72  pt-24">
                <h1 className="text-4xl font-semibold">SHOP DETAIL</h1>
                <p className="pt-6"><span className="text-red-300">Home</span> - Shop Detail</p>
            </div>
            <div className="w-1/2 float-right">
                <div>
                    <h1 className="text-3xl font-bold">Colorful Stylish Shirt</h1>
                    <div>
                        <p className="fas fa-star text-red-300"></p>
                        <p className="fas fa-star text-red-300"></p>
                        <p className="fas fa-star text-red-300"></p>
                        <p className="fas fa-star-half-alt  text-red-300"></p>
                        <p className="far fa-star text-red-300"></p>
                        <p className="pt-1">(50 Reviews)</p>
                        <h1 className="font-semibold">$150.00</h1>
                        <p>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                        <div className="flex pt-4">
                            <p className="text-xl  font-bold">Sizes:</p>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-1" name="size"></input>
                                <label>XS</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-2" name="size"></input>
                                <label>S</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-3" name="size"></input>
                                <label>M</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-4" name="size"></input>
                                <label>L</label>
                            </div>
                            <div className="ml-4 pt-1">
                                <input type="radio" id="size-5" name="size"></input>
                                <label>XL</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex pt-4">
                        <p className="text-xl  font-bold">Colors:</p>
                        <div className="ml-4 pt-1">
                            <input type="radio" id="size-1" name="size"></input>
                            <label>Black</label>
                        </div>
                        <div className="ml-4 pt-1">
                            <input type="radio" id="size-2" name="size"></input>
                            <label>White</label>
                        </div>
                        <div className="ml-4 pt-1">
                            <input type="radio" id="size-3" name="size"></input>
                            <label>Red</label>
                        </div>
                        <div className="ml-4 pt-1">
                            <input type="radio" id="size-4" name="size"></input>
                            <label>Blue</label>
                        </div>
                        <div className="ml-4 pt-1">
                            <input type="radio" id="size-5" name="size"></input>
                            <label>Green</label>
                        </div>
                    </div>
                    <div>
                        <button>
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}