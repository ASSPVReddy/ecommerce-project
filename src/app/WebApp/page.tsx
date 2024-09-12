'use client'
import MailContent from "../ReusableComponents/CardComponents/MailCard";
import VendorCard from "../ReusableComponents/CompanyCard/CompanyCard";
import Footer from "../ReusableComponents/Footer/page";
import Header from "../ReusableComponents/Header/page";
import Homecard from "../ReusableComponents/HomeCategory/page"
import ProductCard from "../ReusableComponents/ProductCard/page";
import ServiceCard from "../ReusableComponents/Services/page";
import Collectioncontent from "../ReusableComponents/CardComponents/DiffCollection";
import HomePageNav from "../ReusableComponents/HomePageNav/page";
import Category from "../../../public/servicefile/Category.json";
import Product from "../../../public/servicefile/Products.json"

function importAll(r: any) {
    let images = {};
    r.keys().map((item: any) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
    const images = importAll(require.context('../../../public/img', false, /\.(png|jpg|svg)$/));

const myArray = Object.values(images);

  fetch("../../../public/servicefile/service.json")
.then(data => data.json())
.then(json => console.log(json));

const Ecommerce = () => {

    return (
        <div>
            <div >
            <div >
                <Header />
            </div>
          <div className="px-16 ">
            <HomePageNav  />
            </div>
            <div className="container px-14">
                <div className="flex justify-center m-5">
                <ServiceCard service={"Quality Product"} icon={"<i fa-solid fa-check"}/>
                <ServiceCard  service={"Free Shipping"} icon={"fa fa-shipping-fast text-primary "}/>
                <ServiceCard  service={"14-Days Return"} icon={"fas fa-exchange-alt text-primary m-0 mr-3"}/>
                <ServiceCard  service={"24/7 Support"} icon={"fa fa-phone-volume text-primary m-0 mr-3"}/>
            </div>
            <div className="flex flex-wrap ">
                {Category.map((item) => {
                        return (
                            <Homecard category={item.name} imagepath={item.imagepath} productCount={item.numberofProducts} />
                        )
                })}
            </div>
            <div className="flex ">
                <Collectioncontent />
            </div>
            <div className="flex justify-center items-center h-11 m-10 w-full text-center">
                    <hr className="w-3/12 h-1 bg-black z-0 absolute"></hr>
                    <h1 className="z-10 relative bg-white text-4xl	font-bold leading-loose	px-2">Trendy Products</h1>
                </div>
            <div  className="w-full">
                <div className="w-full flex flex-wrap">
                    {Product.map(e => {
                            return (
                                <ProductCard imagepath={e.imagepath} title={e.producttitle} price={e.price} discount={e.discount} width="w-1/4"/>
                            )
                    })
                    }
                </div>
            </div>
            </div>
            <MailContent />
            <div className="container px-14">
            <div  className="w-full ">
                <div className="flex justify-center items-center h-11 m-10 w-full text-center">
                    <hr className="w-3/12 h-1 bg-black z-0 absolute"></hr>
                    <h1 className="z-10 relative bg-white text-4xl	font-bold leading-loose	px-2">JUST ARRIVED</h1>
                </div>
                <div className="w-full">
                    <div className="w-full flex flex-wrap ">
                {Product.map(e => {
                            return (
                                <ProductCard imagepath={e.imagepath} title={e.producttitle} price={e.price} discount={e.discount} width="w-1/4"/>
                            )
                    })
                    }
                </div>
                </div>
            </div>
            <div className="w-full">
                <div className=" flex flex-wrap">
                    {myArray.map(e => {
                        if (e?.default.src.includes('vendor')) {
                            return (
                                <VendorCard imagepath={e} />
                            )
                        }
                    })
                    }
            </div>
            </div>
            </div>
            <Footer />
        </div>
        </div>
    )

}
export default Ecommerce