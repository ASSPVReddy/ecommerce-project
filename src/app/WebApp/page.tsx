'use client'
import Collectioncontent from "../ReusableComponents/CardComponents/DiffCollection";
import MailContent from "../ReusableComponents/CardComponents/MailCard";
import VendorCard from "../ReusableComponents/CompanyCard/CompanyCard";
import Footer from "../ReusableComponents/Footer/page";
import Header from "../ReusableComponents/Header/page";
import Homecard from "../ReusableComponents/HomeCategory/page"
import ProductCard from "../ReusableComponents/ProductCard/page";
import SideNav from "../ReusableComponents/SideNav/page";
import Script from "../../../node_modules/next/script";
import HomeNavigation from "../Components/Home/page";
import ServiceCard from "../ReusableComponents/Services/AdditonalFeatures";

function importAll(r: any) {
    let images = {};
    r.keys().map((item: any) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}
    const images = importAll(require.context('../../../public/img', false, /\.(png|jpg|svg)$/));

const myArray = Object.values(images);
const Ecommerce = () => {

    return (
        <div>
            {/* <Script
                src="../../../public/servicefile/service.js" strategy="lazyOnload" onLoad={() => console.log('Script loaded')}
            /> */}
            <div className="px-12">
            <div className="">
                <Header />
            </div>
          <div className="flex w-full">
              <div className="w-3/12 mr-4">
                <SideNav />
            </div>
            <div className="w-3/4">
                <HomeNavigation />
            </div>
            </div>
            <div className="flex justify-center m-5">
                <ServiceCard service={"Quality Product"} icon={"<i fa-solid fa-check"}/>
                <ServiceCard  service={"Free Shipping"} icon={"fa fa-shipping-fast text-primary "}/>
                <ServiceCard  service={"14-Days Return"} icon={"fas fa-exchange-alt text-primary m-0 mr-3"}/>
                <ServiceCard  service={"24/7 Support"} icon={"fa fa-phone-volume text-primary m-0 mr-3"}/>
            </div>
            <div className="flex flex-wrap ">
                {myArray.map((item) => {
                    if (item?.default.src.includes('cat')) {
                        return (
                            <Homecard productCount={'15 products'} imagepath={item} category={'hello'} />
                        )
                    }
                })}
            </div>
            <div className="flex ">
                <Collectioncontent />
            </div>
            <div className="flex justify-center items-center h-11 m-10 w-full text-center">
                    <hr className="w-3/12 h-1 bg-black z-0 absolute"></hr>
                    <h1 className="z-10 relative bg-white text-4xl	font-bold leading-loose	px-2">Trendy Products</h1>
                </div>
            <div  className="w-full ">
                <div className="w-full flex flex-wrap ">
                    {myArray.map(e => {
                        if (e?.default.src.includes('product')) {
                            return (
                                <ProductCard imagepath={e} title={"title"} price={100} discount={200} />
                            )
                        }
                    })
                    }
                </div>
            </div>
            <MailContent />
            <div  className="w-full ">
                <div className="flex justify-center items-center h-11 m-10 w-full text-center">
                    <hr className="w-3/12 h-1 bg-black z-0 absolute"></hr>
                    <h1 className="z-10 relative bg-white text-4xl	font-bold leading-loose	px-2">JUST ARRIVED</h1>
                </div>
                <div className="w-full flex flex-wrap ">
                    {myArray.map(e => {
                        if (e?.default.src.includes('product')) {
                            return (
                                <ProductCard imagepath={e} title={"title"} price={100} discount={200} />
                            )
                        }
                    })
                    }
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
            <Footer />
        </div>
        </div>
    )

}
export default Ecommerce