
import { PageNav } from "../Pagenav/page"
import PageSideNav from "@/app/Components/PageSIdeNav/page"

const PageNavbar = () => {
    return (
        <div className="flex px-16 pr-40 h-16">
            <div className="w-3/12">
                <PageSideNav />
            </div>
            <div className="w-3/4 px-8">
                <div>
                    <PageNav />
                </div>
            </div>
        </div>
    )
}
export default PageNavbar