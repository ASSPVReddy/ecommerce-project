import ShopDetails from "@/app/Components/ShopDetail/page";
import { useItemContext } from "@/app/contextAPI/ItemsProvider";
import { useState } from "react";
import Link from "next/link";

const ProductCard = ({
    imagepath,
    product_id,
    title,
    price,
    description,
    category
}) => {
    const { product, error } = useItemContext();
    const { selectedProduct, setSelectedProduct } = useState([]);

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }
    if (!product) {
        return <div>Loading...</div>;
    }

    const handleProductDetails = () => {
        let clickedCat = product.filter((ele) => ele.category_name == category);
        let selectedProd = clickedCat.flatMap((e) =>
            e.products.filter((element) => element.id == product_id)
        );
        setSelectedProduct(selectedProd);
    };
    
    return (
        <div className={`w-1/4 pt-6 h-[600px] bg-red-300`}>
                <div className="p-6 border w-full h-full bg-gray-300 m-2">
                    <div className="p-2 m-6 h-[300px]">
                        <img
                            src={imagepath}
                            alt="pic"
                            className="w-full h-full duration-300 hover:scale-125"
                        />
                    </div>
                    <div className="w-full h-[200px]">
                        <div className="text-center w-full text-base font-semibold border-t">
                            <h1 className="p-3">{title}</h1>
                            <h2 className="p-3">
                                ${price}
                                <del className="pl-2"></del>
                            </h2>
                        </div>
                        <div>
                            <p className="">{description}</p>
                        </div>
                        <div className="w-full flex justify-between font-normal text-base p-3 border">
                            <button
                                className="hover:text-red-300 pl-2"
                                onClick={() => handleProductDetails()}
                            >
                                <Link href="/Components/ShopDetail">
                                    <i className="fa-solid fa-eye text-red-300"></i>View Details
                                </Link>
                            </button>
                            <a
                                href="#"
                                className="hover:text-red-300 pr-2"
                            >
                                <i className="fa-solid fa-cart-shopping text-red-300"></i>Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
          
        </div>
    );
};
export default ProductCard;
