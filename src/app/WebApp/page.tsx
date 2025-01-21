'use client'
import VendorCard from "../ReusableComponents/CompanyCard/CompanyCard";
import Footer from "../ReusableComponents/Footer/page";
import Header from "../ReusableComponents/Header/page";
import Homecard from "../ReusableComponents/HomeCategory/page"
import ProductCard from "../ReusableComponents/ProductCard/page";
import ServiceCard from "../ReusableComponents/Services/page";
import Collectioncontent from "../ReusableComponents/CardComponents/DiffCollection";
import HomePageNav from "../ReusableComponents/HomePageNav/page";
import { useItemContext } from "../contextAPI/ItemsProvider";
import ProductsPage from "../Products/page";
import { useState } from "react";


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
    const [categoryName,setCategoryName]=useState("")
    const { product , error } = useItemContext();
     if (error) { return <div>Error fetching data: {error.message}</div>; }
     if (!product) { return <div>Loading...</div>; } 
      const CategoryHandle=(category:string)=>{
        setCategoryName(category);
        console.log(categoryName,category);
       <ProductsPage value={category} />
      }
      return (
        <div>
            <div >
                <div >
                    <Header />
                </div>
                <div className="px-16 ">
                    <HomePageNav />
                </div>
                <div className="container px-14">
                    <div className="flex justify-center m-5">
                        <ServiceCard service={"Quality Product"} icon={"<i fa-solid fa-check"} />
                        <ServiceCard service={"Free Shipping"} icon={"fa fa-shipping-fast text-primary "} />
                        <ServiceCard service={"14-Days Return"} icon={"fas fa-exchange-alt text-primary m-0 mr-3"} />
                        <ServiceCard service={"24/7 Support"} icon={"fa fa-phone-volume text-primary m-0 mr-3"} />
                    </div>
                    <div className="flex flex-wrap ">
                        {product.map((item) => {
                            return (
                                <div className="w-1/3" onClick={()=>CategoryHandle(item.category_name)} key={item.category_name}>
                                <Homecard category={item.category_name} imagepath={item.products[0].image}  />
                                </div>
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
                    <div className="w-full">
                        <div>
                        </div>
                        {product.map((element:any) => {                            
                            return(
                        <div className="w-full flex flex-wrap" >  
                            {element.products.map(e => {                                
                                return (
                                    <ProductCard  imagepath={e.image} title={e.title} price={e.price} description={e.description}  category={element.category_name} product_id={e.id} />
                                )
                            })
                            }   
                        </div>
                            )
                        })}    
                    </div>
                </div>
                <div className="container px-14">
                    <div className="w-full">
                        <div className=" flex flex-wrap">
                            {myArray.map(e => {
                                if (e?.default.src.includes('vendor')) {
                                    return (
                                        <VendorCard imagepath={e} key={""}/>
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