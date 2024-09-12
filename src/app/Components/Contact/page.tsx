import PageTitleCard from "@/app/ReusableComponents/CardComponents/PagetitleCard"
import Header from "@/app/ReusableComponents/Header/page"
import PageNavbar from "@/app/ReusableComponents/PagesNavigation/page"

export default function Contact() {
    return (

        <div>
            <Header />
            <PageNavbar   />
            <PageTitleCard Title={"CONTACT US"} SubTitle="Contact"/>
            <div>
                <h1 className="text-center text-4xl font-bold pt-20">- Contact For Any Queries -</h1>
            </div>
            <div className="flex justify-between pt-8 p-14">
                <div className="w-8/12">
                    <div>
                        <input type="text" placeholder="Your Name" className="w-full  py-2 border-violet-100 border-2 mb-4 focus:outline-transparent"></input>
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" className="w-full  py-2  border-violet-100 border-2 mb-4 focus:outline-transparent"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="w-full  py-2  border-violet-100 border-2 mb-4 focus:outline-transparent"></input>
                    </div>
                    <div>
                        <input type="text" placeholder="Message" className="w-full  h-40 text-top  border-violet-100 border-2 mb-2 focus:outline-transparent"></input>
                    </div>
                    <div>
                        <button className=" text-black border-red-300 border-2ws  float-right  w-40 h-11 bg-red-300 text-sm text-center px-6 py-2 hover:text-white float-left">Send Message</button>
                    </div>
                </div>
                <div className="w-5/12 ml-8">
                    <div>
                        <h1 className="text-xl font-bold">Get In Touch</h1>
                        <p className="text-base font-normal pt-4">Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                    </div>
                    <div className="pt-4">
                        <h1 className="text-xl font-bold ">Store 1</h1>
                        <div className="flex pt-3">
                            <div>
                                <i className="fa fa-map-marker-alt text-primary text-red-300"></i>
                            </div>
                            <div className="ml-4">
                                <p> 123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div>
                                <i className="fa fa-envelope text-primary mr-3 text-red-300"></i>
                            </div>
                            <div>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div>
                                <i className="fa-solid fa-phone mr-3 text-red-300"></i>
                            </div>
                            <div>
                                <p> +012 345 67890</p>
                            </div>
                        </div>

                    </div>
                    <div className="pt-6">
                        <h1 className="text-xl font-bold">Store 2</h1>
                        <div className="flex pt-4">
                            <div>
                                <i className="fa fa-map-marker-alt text-primary text-red-300"></i>
                            </div>
                            <div className="ml-4">
                                <p> 123 Street, New York, USA</p>
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div>
                                <i className="fa fa-envelope text-primary mr-3 text-red-300"></i>
                            </div>
                            <div>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className="flex pt-2">
                            <div>
                                <i className="fa-solid fa-phone mr-3 text-red-300"></i>
                            </div>
                            <div>
                                <p> +012 345 67890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}