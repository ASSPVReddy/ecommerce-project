export default function MailContent () {
    return (
        <div className=" bg-indigo-50 border-2ws text-center w-full h-80 pt-20">
            <div>
            <h1 className="text-2xl font-semibold "><span>-Stay Updated-</span></h1>
            <h1>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore</h1>
            </div>
            <div className="pt-6">
            <input type="email" placeholder="Email Goes Here" className="w-1/2 px-2 py-2"></input>
            <button className="bg-red-300 hover:text-white px-2 py-2">Submit</button>
            </div>
        </div>
    )
}


