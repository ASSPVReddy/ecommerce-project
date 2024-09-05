'use client'
import Homecard from "../ReusableComponents/HomeCategory/page"

function importAll(r:any) {
    let images = {};
    r.keys().map((item :any) => {
         images[item.replace('./', '')] = r(item); 
        });
    return images;
  }

const images = importAll(require.context('../../../public/img', false, /\.(png|jpg|svg)$/));

const myArray = Object.values(images);
const Ecommerce=()=>{
    return(
        <div className="flex justify-center items-center flex-wrap flex-auto	 ">
            {myArray.map((item,index)=>{
                if(item?.default.src.includes('cat')) {
                    return(
                        <Homecard productCount={'15 products'} imagepath={item} category={'hello'} />
                    )
                }
            })}

           
        </div>
    )

}
export default Ecommerce