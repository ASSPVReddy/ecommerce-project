import { PageNav } from "@/app/ReusableComponents/Pagenav/page";
import Image from "../../../../node_modules/next/image";
import carousel1 from "../../../../public/img/carousel1.jpg"
export default function HomeNavigation() {
    return (
        <header className="py-5">
           <PageNav />
            <div className='relative'>
                <div className=" z-0 w-full h-full">
                <Image src={carousel1} alt="hello" className="w-full h-1/2"/>
                </div>
                <div className="z-10 w-full absolute text-white text-center top-1/2">
                    <h4 className='text-2xl uppercase font-medium pb-5'>10% Off Your First Order</h4>
                    <h3 className='text-5xl font-bold pb-10'>Fashionable Dress</h3>
                    <button className="form-control border-[1px] px-4 py-2 bg-white  hover:bg-slate-100 text-black">Shop Now</button>
                </div>
            </div>
        </header>
    );
}