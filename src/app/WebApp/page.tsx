import ServiceCard from "../reusableComponents/Services/AdditonalFeatures";
import Homecard from "../reusableComponents/HomeCategory/page";
import CollectionCard from "../reusableComponents/CollectionCard/DiffCollection";
import offer1 from "../../../public/img/offer1.png"
import offer2 from "../../../public/img/offer2.png"

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
        <div className="flex justify-center items-center flex-wrap flex-auto ">
            <div className="flex justify-center items-center flex-wrap flex-auto">
                <ServiceCard service="Quality Product" icon={"fa-sharp fa-solid fa-check"} />
                <ServiceCard service="Free Shipping" icon={"fa fa-shipping-fast text-primary"} />
                <ServiceCard service="14-Day Return" icon={"fas fa-exchange-alt text-primary"} />
                <ServiceCard service="24/7 Support" icon={"fa fa-phone-volume text-primary"} />
            </div>
            <div className="flex justify-center items-center flex-wrap flex-auto">
                {myArray.map((item) => {
                    if (item.default.src.includes('cat')) {
                        return (
                            <div>
                                <Homecard productCount={'15 products'} imagepath={item} category={'hello'} />
                            </div>
                        )
                    }
                })}
            </div>
            <div>
                <CollectionCard imagepath={offer1} text={"20% OF THE ALL ORDER"} paragraph={"Spring Collection"}></CollectionCard>
            </div>
        </div>
    )
}
export default Ecommerce