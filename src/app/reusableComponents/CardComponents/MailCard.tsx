export default function MailContent() {
    return (
        <div className="w-full h-96 pt-24 flex justify-center items-center">
       <div className="bg-indigo-50 border-2ws h-full  w-full text-center ">
            <div>
                <div className="flex justify-center items-center m-10 w-full text-center">
                    <hr className="w-1/5 h-1 bg-black z-0 absolute"></hr>
                    <h1 className="z-10 relative bg-indigo-50 text-3xl	font-bold leading-loose	px-2">Stay Updated</h1>
                </div>
                <h1>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore</h1>
            </div>
            <div className="pt-6">
                <input type="email" placeholder="Email Goes Here" className="w-1/3 px-2 py-2"></input>
                <button className="bg-red-300 hover:text-white px-2 py-2">Submit</button>
            </div>
        </div>
        </div>
 
    )
}


