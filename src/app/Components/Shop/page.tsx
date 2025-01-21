"use client"
import { useItemContext } from "@/app/contextAPI/ItemsProvider"
import PageTitleCard from "@/app/ReusableComponents/CardComponents/PagetitleCard"
import FilterType from "@/app/ReusableComponents/filtertype/page"
import Footer from "@/app/ReusableComponents/Footer/page"
import Header from "@/app/ReusableComponents/Header/page"
import PageNavbar from "@/app/ReusableComponents/PagesNavigation/page"
import ProductCard from "@/app/ReusableComponents/ProductCard/page"

const ShopPage = () => {
    const { product, error } = useItemContext();
    if (error) { return <div>Error fetching data: {error.message}</div>; }
     if (!product) { return <div>Loading...</div>; }  
    
    return (
        <div>
            <Header />
            <PageNavbar />
            <PageTitleCard Title={"OUR SHOP"} SubTitle={"shop"} />
            <div className="flex w-full pt-24">
                <div className="w-1/3">
               <div className="w-full h-80 border-b-2 px-6">
                    <h1 className="pl-14 text-xl font-bold pb-4">Filter by Price</h1>
                    <FilterType labeltype={"All Price"} numberofitems="1000"/>
                    <FilterType labeltype={"$0-$100"} numberofitems="150"/>
                    <FilterType labeltype={"$100-$200"} numberofitems="295"/>
                    <FilterType labeltype={"$200-$300"} numberofitems="246"/>
                    <FilterType labeltype={"$300-$400"} numberofitems="145"/>
                    <FilterType labeltype={"$400-$500"} numberofitems="168"/>
                </div>
                <div className="w-full h-80 border-b-2 px-6">
                    <h1 className="pl-14 text-xl font-bold pb-4">Filter by Price</h1>
                    <FilterType labeltype={"All Price"} numberofitems="1000"/>
                    <FilterType labeltype={"$0-$100"} numberofitems="150"/>
                    <FilterType labeltype={"$100-$200"} numberofitems="295"/>
                    <FilterType labeltype={"$200-$300"} numberofitems="246"/>
                    <FilterType labeltype={"$300-$400"} numberofitems="145"/>
                    <FilterType labeltype={"$400-$500"} numberofitems="168"/>
                </div>
                <div className="w-full h-80 px-6">
                    <h1 className="pl-14 text-xl font-bold pb-4">Filter by Price</h1>
                    <FilterType labeltype={"All Price"} numberofitems="1000"/>
                    <FilterType labeltype={"$0-$100"} numberofitems="150"/>
                    <FilterType labeltype={"$100-$200"} numberofitems="295"/>
                    <FilterType labeltype={"$200-$300"} numberofitems="246"/>
                    <FilterType labeltype={"$300-$400"} numberofitems="145"/>
                    <FilterType labeltype={"$400-$500"} numberofitems="168"/>
                </div>
                </div>
                <div className="w-2/3">
                    <div className="w-full flex justify-between">
                        <div className="w-3/4 flex items-center pb-6">
                            <div className="w-3/4 z-10 ">
                                <input type="text" className="form-control border border-grey  pl-1 pr-4 py-2 w-full" placeholder="Search for products" />
                            </div>
                            <div>
                                <i className="fa-solid fa-magnifying-glass border border-grey-300 py-3 px-3 text-red-300"></i>
                            </div>
                        </div>
                    </div>
                    {product.map(element =>{
                        return(
                    <div className="flex flex-wrap">
                        {element.map(e => {
                            return (
                                <ProductCard imagepath={e.product.image} title={e.producttitle} price={e.price} description={e.description} />
                            )
                        })
                        }
                    </div>  
                        ) 
                })}
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ShopPage